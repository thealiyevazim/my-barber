export interface BarbersEmptyDate {
  ok: boolean;
  data: EmptyDate[];
}

export interface EmptyDate {
  id: string;
  barber_id: string;
  client_id: string;
  timestamp: string;
}

export interface GetBarberDatePayload {
  date: string;
  id: string;
}
