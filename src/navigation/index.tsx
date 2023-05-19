import React from 'react';
import AuthNavigator from '../auth/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import {ClerkLoaded, useUser} from '@clerk/clerk-expo';

export default function Navigator() {
  const {isSignedIn} = useUser();
  return (
    <NavigationContainer>
      <ClerkLoaded>
        {isSignedIn ? <AppNavigator /> : <AuthNavigator />}
      </ClerkLoaded>
    </NavigationContainer>
  );
}
