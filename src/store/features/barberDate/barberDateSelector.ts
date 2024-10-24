import { useAppSelector } from '../../hooks';

export const getBarberDateData = () =>
  useAppSelector(state => state.barberDate?.emptyDate);
