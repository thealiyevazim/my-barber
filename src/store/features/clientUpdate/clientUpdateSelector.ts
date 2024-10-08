import { useAppSelector } from '../../hooks';

export const useClientUpdateData = () =>
  useAppSelector(store => store.clientUpdate.updateResponse?.data);
