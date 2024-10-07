import { createSlice } from '@reduxjs/toolkit';
import { Barbers } from '~shared';
import { getBarbers } from './barbersDataThunk';

interface BarbersState {
  barbers: Barbers[];
  loading: boolean;
  error: string | null;
}

const initialState: BarbersState = {
  barbers: [],
  loading: false,
  error: null,
};

const barbersDataSlice = createSlice({
  name: 'barbers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getBarbers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBarbers.fulfilled, (state, action) => {
        state.barbers = action.payload.data;
        state.loading = false;
      })
      .addCase(getBarbers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { reducer: barbersDataSliceReducer } = barbersDataSlice;
