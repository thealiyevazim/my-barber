import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SecureStorageKey = {
  Token: '@mybarber_token',
  UserLogin: '@mybarber_user_login',
  UserPassword: '@mybarber_user_password',
} as const;
type SecureStorageKeyType =
  (typeof SecureStorageKey)[keyof typeof SecureStorageKey];

async function getItem(
  key: string,
  options?: SecureStore.SecureStoreOptions,
): Promise<string | null> {
  // const isAvailable = await SecureStore.isAvailableAsync();
  // if (!isAvailable) {
  return AsyncStorage.getItem(key);
  // }
  // return SecureStore.getItemAsync(key, options);
}

async function setItem(
  key: string,
  value: string,
  options?: SecureStore.SecureStoreOptions,
): Promise<void> {
  // const isAvailable = await SecureStore.isAvailableAsync();
  // console.log('isAvailable', isAvailable);
  // if (!isAvailable) {
  return AsyncStorage.setItem(key, value);
  // }
  // return SecureStore.setItemAsync(key, value, options);
}

async function removeItem(
  key: string,
  options?: SecureStore.SecureStoreOptions,
): Promise<void> {
  // const isAvailable = await SecureStore.isAvailableAsync();
  // if (!isAvailable) {
  return AsyncStorage.removeItem(key);
  // }
  // return SecureStore.deleteItemAsync(key, options);
}

class SecureStorage {
  async getItem(key: SecureStorageKeyType) {
    try {
      return await getItem(key);
    } catch {
      console.error('Error: Not found from asyncStore');
    }
  }

  async setItem(key: SecureStorageKeyType, value: string) {
    try {
      await setItem(key, value);
    } catch {
      console.error('Error: Does not save to asyncStore');
    }
  }

  async removeItem(key: SecureStorageKeyType) {
    try {
      await removeItem(key);
    } catch {
      console.error('Error: Can not remove to asyncStore');
    }
  }
}

export class TokenStorage extends SecureStorage {
  async getToken() {
    return this.getItem(SecureStorageKey.Token);
  }

  async setToken(value: string) {
    await this.setItem(SecureStorageKey.Token, value);
  }

  async removeToken() {
    await this.removeItem(SecureStorageKey.Token);
  }

  async getUserCredentials() {
    const nickName = await this.getItem(SecureStorageKey.UserLogin);
    const password = await this.getItem(SecureStorageKey.UserPassword);

    return { nickName, password };
  }

  async setUserCredentials(nickName: string, password: string) {
    await this.setItem(SecureStorageKey.UserLogin, nickName);
    await this.setItem(SecureStorageKey.UserPassword, password);
  }

  async removeCredentials() {
    await this.removeItem(SecureStorageKey.UserLogin);
    await this.removeItem(SecureStorageKey.UserPassword);
  }
}

export const tokenStorage = new TokenStorage();
