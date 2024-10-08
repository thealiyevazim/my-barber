import { useAppSelector } from '../../hooks';

export const useBarbersData = () =>
  useAppSelector(store => store.barbersData?.barbers);

export const useBarbersDataLoading = () =>
  useAppSelector(stotre => stotre.barbersData.loading);
