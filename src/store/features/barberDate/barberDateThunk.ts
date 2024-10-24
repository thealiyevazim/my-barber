import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientApi } from '~api';
import { BarbersEmptyDate, GetBarberDatePayload } from '~shared';
import { sleep } from '~utils';

export const getBarberDate = createAsyncThunk<
  BarbersEmptyDate,
  GetBarberDatePayload
>('client/barberEmptyData', async ({ date, id }, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
    await sleep(500);
    const response = await clientApi.getBarberEmptyDate(date, id);
    return response as BarbersEmptyDate;
  } catch (e: any) {
    return rejectWithValue(e.response?.data || e.message);
  }
});
