import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientApi } from '~api';
import { BarbersData } from '~shared';

export const barbersData = createAsyncThunk<BarbersData, void>(
  'client/barbersData',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await clientApi.barbers();

      return response as BarbersData;
    } catch (e: any) {
      return rejectWithValue(e.response?.data || e.message);
    }
  },
);
