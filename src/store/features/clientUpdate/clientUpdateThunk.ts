import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientApi } from '~api';
import { ClientUpdateData, ClientUpdateDataResponse } from '~shared';
import { AppThunkConfig } from '~store/types';
import { sleep } from '~utils';

export const clientUpdate = createAsyncThunk<
  ClientUpdateDataResponse,
  ClientUpdateData,
  AppThunkConfig
>('client/clientUpdate', async ({ full_name, phone }, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
    await sleep(500);
    const response = await clientApi.clientUpdate({
      full_name,
      phone,
    });

    return response as ClientUpdateDataResponse;
  } catch (e: any) {
    return rejectWithValue(e.response?.data || e.message);
  }
});
