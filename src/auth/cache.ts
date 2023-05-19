import AsyncStorage from '@react-native-async-storage/async-storage';

import {Platform} from 'react-native';
import {TokenCache} from '@clerk/clerk-expo/dist/cache';

const createTokenCache = (): TokenCache => {
  return {
    getToken: async key => {
      return await AsyncStorage.getItem(key);
    },
    saveToken: async (key, token) => {
      return await AsyncStorage.setItem(key, token);
    },
  };
};

export const tokenCache =
  Platform.OS !== 'web' ? createTokenCache() : undefined;
