import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientApi } from '~api';
import { BarbersData, GetBarbersPayload } from '~shared';
import { sleep } from '~utils';

export const getBarbers = createAsyncThunk<BarbersData, GetBarbersPayload>(
  'client/barbersData',
  async ({ page = 1 }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      await sleep(500);
      const response = await clientApi.barbers(page);
      return response as BarbersData;
    } catch (e: any) {
      return rejectWithValue(e.response?.data || e.message);
    }
  },
);
