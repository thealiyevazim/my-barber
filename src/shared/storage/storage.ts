import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserTypesEnum } from "~enums";

const StorageKey = {
  biometricsEnabled: "@mybarber_biometrics_enabled",
  biometricsEnabledLater: "@mybarber_biometrics_enabled_later",
  LastRefresh: "@mybarber_last_refresh",
  locales: "@mybarber_locales",
  pendingRequests: "@mybarber_pending_requests",
  userType: "@mybarber_user_type",
} as const;
type StorageKeyType = (typeof StorageKey)[keyof typeof StorageKey];

class BaseStorage {
  protected async getItem(key: StorageKeyType) {
    try {
      return await AsyncStorage.getItem(key);
    } catch {}
  }

  protected async setItem(key: StorageKeyType, value: string) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch {}
  }

  protected async removeItem(key: StorageKeyType) {
    try {
      await AsyncStorage.removeItem(key);
    } catch {}
  }
}

class Storage extends BaseStorage {
  async setUserType(value: UserTypesEnum) {
    return this.setItem(StorageKey.userType, value);
  }
  async getUserType() {
    return this.getItem(StorageKey.userType);
  }
  async getLocales() {
    return this.getItem(StorageKey.locales);
  }
  async setLocales(value: string) {
    await this.setItem(StorageKey.locales, value);
  }

  async getLastRefresh() {
    return this.getItem(StorageKey.LastRefresh);
  }
  async setLastRefresh(value: string) {
    await this.setItem(StorageKey.LastRefresh, value);
  }

  async getIsBiometricsEnabled() {
    return this.getItem(StorageKey.biometricsEnabled);
  }
  async setIsBiometricsEnabled(value: string) {
    await this.setItem(StorageKey.biometricsEnabled, value);
  }
  async removeBiometricsEnabled() {
    await this.removeItem(StorageKey.biometricsEnabled);
  }

  async getIsBiometricsEnabledLater() {
    return this.getItem(StorageKey.biometricsEnabledLater);
  }
  async setIsBiometricsEnabledLater(value: string) {
    await this.setItem(StorageKey.biometricsEnabledLater, value);
  }
  async removeBiometricsEnabledLater() {
    await this.removeItem(StorageKey.biometricsEnabledLater);
  }

  async setLatestPendingRequests(value: any) {
    const jsonValue = JSON.stringify(value);
    await this.setItem(StorageKey.pendingRequests, jsonValue);
  }

  async getLatestPendingRequests(): Promise<any | undefined> {
    const jsonValue = await this.getItem(StorageKey.pendingRequests);
    if (jsonValue === undefined || jsonValue === null) {
      return undefined;
    }
    try {
      return JSON.parse(jsonValue) as any;
    } catch (error) {
      return undefined;
    }
  }
}

export const storage = new Storage();
