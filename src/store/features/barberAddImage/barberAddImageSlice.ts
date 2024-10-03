import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { AddImagesResponse } from '~shared';
import { barberAddImage } from './barberAddImageThunk';

interface AddImages {
  loading: boolean;
  isRejected: SerializedError;
  updateResponse: AddImagesResponse;
}

const initialState: AddImages = {
  updateResponse: {} as AddImagesResponse,
  loading: false,
  isRejected: {},
};

export const barberAddImagesSlice = createSlice({
  name: 'addImages',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(barberAddImage.pending, state => {
        state.loading = true;
      })
      .addCase(
        barberAddImage.fulfilled,
        (state, { payload }: PayloadAction<AddImagesResponse>) => {
          state.loading = false;
          state.updateResponse = payload;
        },
      )
      .addCase(barberAddImage.rejected, (state, action) => {
        state.loading = false;
        state.isRejected = action.error;
      });
  },
});

export const { actions: barberAddImagesAction } = barberAddImagesSlice;
export const { reducer: barberAddImagesReducer } = barberAddImagesSlice;
