import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../../types";

const userTypeSelector = (state: AppState) => state.userType;

export const selectedUserTypeSelector = createSelector(
  userTypeSelector,
  (state) => state.userType
);
