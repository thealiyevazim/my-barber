import { useAppSelector } from '../../hooks';

export const useBarberAddImages = () =>
  useAppSelector(store => store.barberAddImage?.updateResponse.data.url);
