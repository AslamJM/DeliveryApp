import {NativeStackScreenProps} from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList, AppStackParamList {}
  }
}

export type RootStackParamList = {
  RoleSelection: undefined;
  SignUp: undefined;
  SignIn: undefined;
  VerifyCode: undefined;
};

export type AppStackParamList = {
  Profile: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type AppStackScreenProps<Screen extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, Screen>;
