import { useAppSelector } from '~store/hooks';

export const useBarberUpdateData = () =>
  useAppSelector(store => store.barberUpdate.updateResponse?.data);
