import { useAppSelector } from '~store/hooks';

export const useBarberAddImages = () =>
  useAppSelector(store => store.barberAddImage?.updateResponse.data.url);
