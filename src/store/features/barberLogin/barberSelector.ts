import { useAppSelector } from '~store/hooks';

export const useIsAuthBarber = () =>
  useAppSelector(store => !!store.barberLogin?.loginResponse?.data?.token);

export const useBarberData = () =>
  useAppSelector(store => store.barberLogin.loginResponse.data?.barber);
