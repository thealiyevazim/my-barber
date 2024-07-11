import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientApi } from '~api';
import { AppThunkConfig } from '~store';

export interface ServiceData {
  data: string[];
}

export const barberService = createAsyncThunk<
  ServiceData,
  void,
  AppThunkConfig
>('barber/barberService', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
    const response = await clientApi.barberService();

    return response as ServiceData;
  } catch (e: any) {
    return rejectWithValue(e.response?.data || e.message);
  }
});
