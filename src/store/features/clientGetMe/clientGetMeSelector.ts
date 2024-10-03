import { useAppSelector } from '~store/hooks';

export const useClientGetMe = () =>
  useAppSelector(store => store.clientGetMe?.clientGetMeData);
