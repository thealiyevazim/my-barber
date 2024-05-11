import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunkConfig } from "../../types";
import { clientApi } from "~api";
import {
  BarberLoginData,
  BarberLoginDataResponse,
  storage,
  tokenStorage,
} from "~shared";

export const barberLogin = createAsyncThunk<
  BarberLoginDataResponse,
  BarberLoginData,
  AppThunkConfig
>("auth/barberLogin", async ({ username, password }, thunkAPI) => {
  const { dispatch, getState, rejectWithValue } = thunkAPI;

  try {
    const response = await clientApi.barberLogin({
      username,
      password,
    });

    await tokenStorage.setToken(response.token);
    await storage.setLastRefresh(new Date().toISOString());
    await tokenStorage.setUserCredentials(username, password);

    // dispatch(accountActions.setToken(response.token));
    // dispatch(authActions.resetAccountLocked());

    return response;
  } catch (e: any) {
    // toast.fail({ title: e as string });
    return rejectWithValue(true);
  }
});
