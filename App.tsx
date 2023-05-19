import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {tokenCache} from './src/auth/cache';
import Navigator from './src/navigation';
import {ClerkProvider} from '@clerk/clerk-expo';
import {publishableKey} from './keys';

function App(): JSX.Element {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#fcfcfc'}}>
        <Navigator />
        <StatusBar />
      </SafeAreaView>
    </ClerkProvider>
  );
}

export default App;
