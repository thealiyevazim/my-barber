import { useAppSelector } from '~store/hooks';

export const useClientUpdateData = () =>
  useAppSelector(store => store.clientUpdate.updateResponse?.data);
