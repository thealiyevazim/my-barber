import { useAppSelector } from '../../hooks';

export const useIsAuthClient = () =>
  useAppSelector(store => !!store.clientLogin?.loginResponse?.data?.token);

export const useClientData = () =>
  useAppSelector(store => store.clientLogin?.loginResponse?.data?.client);
