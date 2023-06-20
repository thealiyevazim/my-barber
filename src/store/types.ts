import { BaseThunkAPI } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { initStore } from "./initStore";
import { thunkExtraArgument } from "./thunkExtraArgument";

type Store = ReturnType<typeof initStore>;

export type AppDispatch = Store["dispatch"];

export type AppState = ReturnType<Store["getState"]>;

export type AppThunkAPI<RejectedValue = unknown> = BaseThunkAPI<
  AppState,
  typeof thunkExtraArgument,
  AppDispatch,
  RejectedValue
>;

export type AppThunkConfig<RejectedValue = unknown> = {
  state: AppState;
  dispatch: AppDispatch;
  extra: typeof thunkExtraArgument;
  rejectValue: RejectedValue;
  serializedErrorType?: unknown;
  pendingMeta?: unknown;
  fulfilledMeta?: unknown;
  rejectedMeta?: unknown;
};
