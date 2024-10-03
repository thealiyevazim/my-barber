import { useAppSelector } from '~store/hooks';

export const useBarbersData = () =>
  useAppSelector(store => store.barbersData?.barbers);
