import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientApi } from '~api';
import { ClientGetMeData } from '~shared';

export const clientGetMeData = createAsyncThunk<ClientGetMeData, void>(
  'client/clientGetMe',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await clientApi.clientGetMe();

      return response as ClientGetMeData;
    } catch (e: any) {
      return rejectWithValue(e.response?.data || e.message);
    }
  },
);
