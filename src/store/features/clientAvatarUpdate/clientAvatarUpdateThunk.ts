import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientApi } from '~api';
import {
  ClientAvatarUpdateData,
  ClientUpdateAvatarDataResponse,
} from '~shared';
import { AppThunkConfig } from '~store/types';
import { sleep } from '~utils';

export const clientAvatarUpdate = createAsyncThunk<
  ClientUpdateAvatarDataResponse,
  ClientAvatarUpdateData,
  AppThunkConfig
>('client/upload-avatar', async ({ avatar }, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
    const response = await clientApi.clientAvatarUpdate({ avatar });

    return response;
  } catch (e: any) {
    return rejectWithValue(e.response?.data || e.message);
  }
});
