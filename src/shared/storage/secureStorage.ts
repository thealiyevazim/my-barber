import * as SecureStore from "expo-secure-store";

const SecureStorageKey = {
  Token: "@mybarber_token",
  UserLogin: "@mybarber_user_login",
  UserPassword: "@mybarber_user_password",
} as const;
type SecureStorageKeyType =
  (typeof SecureStorageKey)[keyof typeof SecureStorageKey];

class SecureStorage {
  protected async getItem(key: SecureStorageKeyType) {
    try {
      return await SecureStore.getItemAsync(key);
    } catch {}
  }

  protected async setItem(key: SecureStorageKeyType, value: string) {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch {}
  }

  protected async removeItem(key: SecureStorageKeyType) {
    try {
      await SecureStore.deleteItemAsync(key);
    } catch {}
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
