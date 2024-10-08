import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientApi } from '~api';
import { AddServiceData, AddServiceResponse } from '~shared';
import { AppThunkConfig } from '../../types';
import { addServicesAction } from './addServiceSlice';

export const addServices = createAsyncThunk<
  AddServiceResponse,
  AddServiceData[],
  AppThunkConfig
>('barber/addService', async (body, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  try {
    const response = await clientApi.addService(body);

    if (response.ok) {
      dispatch(addServicesAction.setServices(body));
    }
    return response as AddServiceResponse;
  } catch (e: any) {
    return rejectWithValue(e.response?.data || e.message);
  }
});
