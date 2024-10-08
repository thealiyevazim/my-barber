import { useAppSelector } from '../../hooks';

export const useBarberGetMe = () =>
  useAppSelector(store => store.barberGetMe?.barberGetMeData?.barber);

export const useBarberGetMeService = () =>
  useAppSelector(store => store.barberGetMe?.barberGetMeData?.services);

export const useBarberGetMeImages = () =>
  useAppSelector(store => store.barberGetMe?.barberGetMeData?.barber?.images);
