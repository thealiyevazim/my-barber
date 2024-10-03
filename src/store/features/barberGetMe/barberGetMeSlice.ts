import { createSlice } from '@reduxjs/toolkit';
import { BarberGetMe } from '~shared';
import { barberGetMeData } from './barberGetMeThunk';

interface BarbersState {
  barberGetMeData: BarberGetMe;
  loading: boolean;
  error: string | null;
}

const initialState: BarbersState = {
  barberGetMeData: {} as BarberGetMe,
  loading: false,
  error: null,
};

const barberGetMeSlice = createSlice({
  name: 'barberGetMe',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(barberGetMeData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(barberGetMeData.fulfilled, (state, action) => {
        state.barberGetMeData = action.payload.data;
        state.loading = false;
      })
      .addCase(barberGetMeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { reducer: barberGetMeSliceReducer } = barberGetMeSlice;
