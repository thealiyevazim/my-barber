import { useAppSelector } from '../../hooks';

export const useUserTypeSelector = () =>
  useAppSelector(store => store.userType.userType);
