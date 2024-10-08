import { useAppSelector } from '~store/hooks';

export const useClientAvatarUpdateLoading = () =>
  useAppSelector(store => store.clientAvatarUpdate.loading);
