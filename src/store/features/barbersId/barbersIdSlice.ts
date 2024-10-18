import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Barbers } from '~shared';

interface BarbersState {
  barbers: {
    data: Barbers[];
  };
  selectedBarbers: Barbers | null;
}

const initialState: BarbersState = {
  barbers: {
    data: [],
  },
  selectedBarbers: null,
};

const getBarbersIdSlice = createSlice({
  name: 'barbersId',
  initialState,
  reducers: {
    getBarbersId: (state, action: PayloadAction<Barbers>) => {
      state.selectedBarbers = action.payload;
    },
    clearGetBarbersAction: state => {
      state.selectedBarbers = null;
    },
  },
});

export const { getBarbersId, clearGetBarbersAction } =
  getBarbersIdSlice.actions;
export const { reducer: getBarbersIdSliceReducer } = getBarbersIdSlice;
