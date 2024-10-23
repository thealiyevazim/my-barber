export interface BarbersData {
  ok: boolean;
  data: Barbers[];
}

export interface Barbers {
  id: string;
  username: string;
  full_name: string;
  phone: string;
  location: string;
  birth_date: string;
  working_hours: string;
  images: string[];
  services?: Service[];
}
export interface Service {
  id: string;
  barber_id: string;
  name: string;
  price: number;
}

export interface GetBarbersPayload {
  page: number;
}
