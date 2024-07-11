import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientApi } from '~api';
import {
  BarberLoginData,
  BarberLoginDataResponse,
  tokenStorage,
} from '~shared';
import { AppThunkConfig } from '../../types';

export const barberLogin = createAsyncThunk<
  BarberLoginDataResponse,
  BarberLoginData,
  AppThunkConfig
>('auth/barberLogin', async ({ password, username }, thunkAPI) => {
  const { dispatch, getState, rejectWithValue } = thunkAPI;

  try {
    let response;

    response = await clientApi.barberLogin({ password, username });

    await tokenStorage.setToken(response.data.token);

    // await storage.setLastRefresh(new Date().toISOString());
    // await tokenStorage.setUserCredentials(username, password);

    return response;
  } catch (e: any) {
    // toast.fail({ title: e as string });
    return rejectWithValue(true);
  }
});
