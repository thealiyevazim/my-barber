import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientApi } from '~api';
import { BarberGetMeData } from '~shared';

export const barberGetMeData = createAsyncThunk<BarberGetMeData, void>(
  'barber/barberGetMe',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await clientApi.barberGetMe();

      return response as BarberGetMeData;
    } catch (e: any) {
      return rejectWithValue(e.response?.data || e.message);
    }
  },
);
