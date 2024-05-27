import { createAsyncThunk } from "@reduxjs/toolkit";
import { tokenStorage } from "~shared";
import { AppThunkConfig } from "~store/types";
import { barberLoginAction } from "./barberLogin";
import { userTypeActions } from "./userType";

export const logout = createAsyncThunk<string, void, AppThunkConfig<string>>(
  "account/logout",
  (_, thunkAPI) => {
    const { dispatch } = thunkAPI;

    tokenStorage.removeToken();

    dispatch(barberLoginAction.clear());
    dispatch(userTypeActions.clear());
    // dispatch(accountActions.resetAccountLocked());
    // dispatch(accountActions.clear());
    // dispatch(authActions.clear());
    // dispatch(loansActions.clear());
    // dispatch(rewardsActions.clear());

    return "";
  }
);
