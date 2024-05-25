import NetInfo from "@react-native-community/netinfo";
import { IS_IOS, tokenStorage } from "~shared";
import { internetStatusActions, store } from "~store";

type Body = Record<string, unknown> | string | FormData | Blob;

export interface RequestParams extends Omit<RequestInit, "body" | "method"> {
  body?: Body;
  headers?: Record<string, string>;
  method: "DELETE" | "GET" | "POST" | "PUT";
  useNormalize?: boolean;
}

export interface GetParams {
  headers?: Record<string, string>;
  useNormalize?: boolean;
}

export interface PostParams extends Omit<RequestParams, "body"> {}

export const baseUrl = "https://barber-api.fapp.uz";

export class BaseApi {
  private async request<T>(url: string, params: RequestParams): Promise<T> {
    const state = await NetInfo.fetch();
    if (!state.isConnected) {
      store.dispatch(internetStatusActions.setOffline());
      return Promise.reject("No internet connection");
    }

    const token = await tokenStorage.getToken();

    const body = params?.body;
    const headers = new Headers(params?.headers);
    headers.set("Content-Type", "application/json");
    headers.set("Authorization", `Bearer ${token}`);
    headers.set("User-Agent", IS_IOS ? "iOS" : "Android" + "; ");

    const fetchParams = {
      ...params,
      body: JSON.stringify(body),
      headers,
    };

    try {
      const response = await fetch(`${baseUrl}${url}`, fetchParams);
      const contentType = response.headers?.get?.("Content-Type"); //application/json

      try {
        return contentType?.includes("application/json")
          ? await response.json()
          : await response.text();
      } catch {
        return null as T;
      }
    } catch (e: unknown) {
      return await Promise.reject(e);
    }
  }

  async get<T>(url: string, params?: GetParams): Promise<T> {
    return await this.request<T>(url, {
      method: "GET",
      useNormalize: true,
      ...params,
    });
  }

  async post<T extends Body, R>(
    url: string,
    data: T,
    options?: PostParams
  ): Promise<R> {
    const { headers, useNormalize = true } = options || {};

    return await this.request<R>(url, {
      body: data,
      headers,
      method: "POST",
      useNormalize,
    });
  }

  async put<T extends Body, R>(
    url: string,
    data: T,
    options?: PostParams
  ): Promise<R> {
    const { headers, useNormalize = true } = options || {};

    return await this.request<R>(url, {
      body: data,
      headers,
      method: "PUT",
      useNormalize,
    });
  }

  async delete<T extends Body, R>(
    url: string,
    data: T,
    options?: PostParams
  ): Promise<R> {
    const { headers, useNormalize = true } = options || {};

    return await this.request<R>(url, {
      body: data,
      headers,
      method: "DELETE",
      useNormalize,
    });
  }
}

export const baseApi = new BaseApi();
