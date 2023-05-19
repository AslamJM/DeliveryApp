import React, {useReducer} from 'react';
import {createContext, useContext} from 'react';

interface AuthState {
  role: 'Customer' | 'Driver' | null;
  setRole: (value: 'Customer' | 'Driver') => void;
}

type Action = {
  type: 'SET_ROLE';
  payload: 'Customer' | 'Driver';
};

const initialState: AuthState = {
  role: null,
  setRole: () => {},
};

const authContext = createContext<AuthState>(initialState);

export function useAuthContext() {
  const authState = useContext(authContext);
  return authState;
}

const authReducer = (state: AuthState, action: Action): AuthState => {
  switch (action.type) {
    case 'SET_ROLE':
      return {...state, role: action.payload};
    default:
      return state;
  }
};

const useAuthReducer = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const setRole = (value: 'Customer' | 'Driver') => {
    dispatch({type: 'SET_ROLE', payload: value});
  };
  return {
    ...state,
    setRole,
  };
};

const Authcontext = ({children}: React.PropsWithChildren<{}>) => {
  const authState = useAuthReducer();

  return (
    <authContext.Provider value={authState}>{children}</authContext.Provider>
  );
};

export default Authcontext;
