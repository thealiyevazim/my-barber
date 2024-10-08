import { useAppSelector } from '../../hooks';

export const useClientUpdateData = () =>
  useAppSelector(store => store.clientUpdate.updateResponse?.data);

export const useClientUpdateDataLoading = () =>
  useAppSelector(store => store.clientUpdate.loading);
