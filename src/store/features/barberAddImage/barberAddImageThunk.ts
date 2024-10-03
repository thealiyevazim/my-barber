import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientApi } from '~api';
import { AddImagesData, AddImagesResponse } from '~shared';
import { AppThunkConfig } from '~store';

export const barberAddImage = createAsyncThunk<
  AddImagesResponse,
  AddImagesData,
  AppThunkConfig
>('barber/addImage', async (body, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
    const response = await clientApi.barberAddImage(body);

    return response as AddImagesResponse;
  } catch (e: any) {
    return rejectWithValue(e.response?.data || e.message);
  }
});
