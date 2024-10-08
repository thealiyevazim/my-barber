import { useAppSelector } from '../../hooks';

export const useBarberServiceData = () =>
  useAppSelector(store => store.barberService.services);
