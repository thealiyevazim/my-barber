import { useAppSelector } from '../..//hooks';

export const useClientGetMe = () =>
  useAppSelector(store => store.clientGetMe?.clientGetMeData);

export const useClientGetMeLoading = () =>
  useAppSelector(store => store.clientGetMe.loading);
