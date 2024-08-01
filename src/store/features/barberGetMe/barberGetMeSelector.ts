import { useAppSelector } from '~store/hooks';

export const useBarberGetMe = () =>
  useAppSelector(store => store.barberGetMe?.barberGetMeData?.barber);

export const useBarberGetMeService = () =>
  useAppSelector(store => store.barberGetMe?.barberGetMeData?.services);
