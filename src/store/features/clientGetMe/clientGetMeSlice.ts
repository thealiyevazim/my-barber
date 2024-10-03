import { createSlice } from '@reduxjs/toolkit';
import { ClientGetMe } from '~shared';
import { clientGetMeData } from './clientGetMeThunk';

interface ClientsState {
  clientGetMeData: ClientGetMe;
  loading: boolean;
  error: string | null;
}

const initialState: ClientsState = {
  clientGetMeData: {} as ClientGetMe,
  loading: false,
  error: null,
};

const clientGetMeSlice = createSlice({
  name: 'clientGetMe',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(clientGetMeData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(clientGetMeData.fulfilled, (state, action) => {
        state.clientGetMeData = action.payload.data;
        state.loading = false;
      })
      .addCase(clientGetMeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { reducer: clientGetMeSliceReducer } = clientGetMeSlice;
