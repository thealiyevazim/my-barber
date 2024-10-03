import { useAppSelector } from '~store/hooks';

export const useBarberServiceData = () =>
  useAppSelector(store => store.barberService.services);
