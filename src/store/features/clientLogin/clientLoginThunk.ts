import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientApi } from '~api';
import {
  ClientLoginData,
  ClientLoginDataResponse,
  tokenStorage,
} from '~shared';
import { AppThunkConfig } from '../../types';

export const clientLogin = createAsyncThunk<
  ClientLoginDataResponse,
  ClientLoginData,
  AppThunkConfig
>('auth/clientLogin', async ({ password, username }, thunkAPI) => {
  const { dispatch, getState, rejectWithValue } = thunkAPI;

  try {
    let response;

    response = await clientApi.clientLogin({ password, username });

    await tokenStorage.setToken(response.data.token);

    // await storage.setLastRefresh(new Date().toISOString());
    // await tokenStorage.setUserCredentials(username, password);

    return response;
  } catch (e: any) {
    // toast.fail({ title: e as string });
    console.log(e);
    return rejectWithValue(true);
  }
});
