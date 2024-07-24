import { useAppSelector } from '~store/hooks';

export const useAddService = () => useAppSelector(store => store.addServices);

export const useBarberServices = () =>
  useAppSelector(store => store.addServices.service);
