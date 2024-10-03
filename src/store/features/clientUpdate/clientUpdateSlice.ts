import { PayloadAction, SerializedError, createSlice } from '@reduxjs/toolkit';
import { ClientUpdateDataResponse } from '~shared';
import { clientUpdate } from './clientUpdateThunk';

interface ClientUpdateState {
  loading: boolean;
  isRejected: SerializedError | null;
  updateResponse: ClientUpdateDataResponse | null;
}

const initialState: ClientUpdateState = {
  updateResponse: null,
  loading: false,
  isRejected: null,
};

export const clientUpdateSlice = createSlice({
  name: 'clientUpdate',
  initialState,
  reducers: {
    clear: state => {
      state.updateResponse = initialState.updateResponse;
      state.isRejected = initialState.isRejected;
      state.loading = initialState.loading;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(clientUpdate.pending, state => {
        state.loading = true;
      })
      .addCase(
        clientUpdate.fulfilled,
        (state, { payload }: PayloadAction<ClientUpdateDataResponse>) => {
          state.loading = false;
          state.updateResponse = payload;
        },
      )
      .addCase(clientUpdate.rejected, (state, action) => {
        state.loading = false;
        state.isRejected = action.error;
      });
  },
});

export const { actions: clientUpdateAction } = clientUpdateSlice;
export const { reducer: clientUpdateReducer } = clientUpdateSlice;
