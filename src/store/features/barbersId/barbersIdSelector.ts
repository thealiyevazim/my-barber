import { useAppSelector } from '../../hooks';

export const useBarbersId = () =>
  useAppSelector(store => store.barbersId?.selectedBarbers);
