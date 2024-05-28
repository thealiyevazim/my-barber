import { useAppSelector } from "~store/hooks";

export const useUserTypeSelector = () =>
  useAppSelector((store) => store.userType.userType);
