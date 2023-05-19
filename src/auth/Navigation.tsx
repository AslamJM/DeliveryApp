import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import VerifyCodeScreen from '../screens/VerifyCodeScreen';
import RoleSelectionScreen from '../screens/RoleSelectionScreen';
import Authcontext from '../context/Authcontext';

const AuthStack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigator = () => {
  return (
    <Authcontext>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="RoleSelection"
          component={RoleSelectionScreen}
        />
        <AuthStack.Screen name="SignUp" component={SignUpScreen} />
        <AuthStack.Screen name="SignIn" component={LoginScreen} />
        <AuthStack.Screen name="VerifyCode" component={VerifyCodeScreen} />
      </AuthStack.Navigator>
    </Authcontext>
  );
};

export default AuthNavigator;
