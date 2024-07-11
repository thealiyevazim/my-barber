import { createSlice } from '@reduxjs/toolkit';
import { barberService } from './barberServiceThunk';

interface ServiceState {
  services: string[];
  loading: boolean;
  error: string | null;
}

const initialState: ServiceState = {
  services: [],
  loading: false,
  error: null,
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(barberService.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(barberService.fulfilled, (state, action) => {
        state.services = action.payload.data;
        state.loading = false;
      })
      .addCase(barberService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { actions: servicesSliceAction } = servicesSlice;
export const { reducer: servicesSliceReducer } = servicesSlice;
