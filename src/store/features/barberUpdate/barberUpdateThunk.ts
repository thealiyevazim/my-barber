import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientApi } from '~api';
import {
  BarberUpdateData,
  BarberUpdateDataResponse,
  tokenStorage,
} from '~shared';
import { AppThunkConfig } from '../../types';

export const barberUpdate = createAsyncThunk<
  BarberUpdateDataResponse,
  BarberUpdateData,
  AppThunkConfig
>(
  'barber/barberUpdate',
  async (
    { full_name, phone, location, working_hours, birth_date },
    thunkAPI,
  ) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await clientApi.barberUpdate({
        full_name,
        phone,
        location,
        working_hours,
        birth_date,
      });

      return response as BarberUpdateDataResponse;
    } catch (e: any) {
      return rejectWithValue(e.response?.data || e.message);
    }
  },
);
