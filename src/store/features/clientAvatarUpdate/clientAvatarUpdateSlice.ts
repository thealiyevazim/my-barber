import { createSlice } from '@reduxjs/toolkit';
import { ClientAvatarUpdateData } from '~shared';
import { clientAvatarUpdate } from './clientAvatarUpdateThunk';

interface ClientAvatarUpdateState {
  clientAvatarUpdateData: ClientAvatarUpdateData;
  loading: boolean;
  error: string | null;
}

const initialState: ClientAvatarUpdateState = {
  clientAvatarUpdateData: {} as ClientAvatarUpdateData,
  loading: false,
  error: null,
};

const clientAvatarUpdateSlice = createSlice({
  name: 'clientAvatarUpdate',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(clientAvatarUpdate.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(clientAvatarUpdate.fulfilled, (state, action) => {
        state.clientAvatarUpdateData.avatar = action.payload.data.url;
        state.loading = false;
      })
      .addCase(clientAvatarUpdate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { reducer: clientAvatarUpdateReducer } = clientAvatarUpdateSlice;
