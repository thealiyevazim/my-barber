import { createSlice } from '@reduxjs/toolkit';
import { EmptyDate } from '~shared';
import { getBarberDate } from './barberDateThunk';

interface BarbersState {
  emptyDate: EmptyDate[];
  loading: boolean;
  error: string | null;
}

const initialState: BarbersState = {
  emptyDate: [],
  loading: false,
  error: null,
};

const barberDateSlice = createSlice({
  name: 'barberDate',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getBarberDate.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBarberDate.fulfilled, (state, action) => {
        state.emptyDate = action.payload.data;
        state.loading = false;
      })
      .addCase(getBarberDate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { reducer: barberDateSliceReducer } = barberDateSlice;
