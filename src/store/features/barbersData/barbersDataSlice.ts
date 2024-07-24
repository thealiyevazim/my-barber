import { createSlice } from '@reduxjs/toolkit';
import { BarbersData, Barbers } from '~shared';
import { barbersData } from './barbersDataThunk';

interface BarbersState {
  barbers: Barbers[];
  loading: boolean;
  error: string | null;
}

const initialState: BarbersState = {
  barbers: [] as Barbers[],
  loading: false,
  error: null,
};

const barbersDataSlice = createSlice({
  name: 'barbers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(barbersData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(barbersData.fulfilled, (state, action) => {
        state.barbers = action.payload.data;
        state.loading = false;
      })
      .addCase(barbersData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { reducer: barbersDataSliceReducer } = barbersDataSlice;
