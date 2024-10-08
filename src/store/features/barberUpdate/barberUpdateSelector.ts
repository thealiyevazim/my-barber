import { useAppSelector } from '../../hooks';

export const useBarberUpdateData = () =>
  useAppSelector(store => store.barberUpdate.updateResponse?.data);
