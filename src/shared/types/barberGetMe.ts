export interface BarberGetMeData {
  ok: boolean;
  data: BarberGetMe;
}

export interface BarberGetMe {
  barber: BarberGet;
  services: Service[];
}

export interface BarberGet {
  id: string;
  username: string;
  full_name: string;
  phone: string;
  location: string;
  birth_date: string;
  working_hours: string;
  images: string[];
}

export interface Service {
  id: string;
  barber_id: string;
  name: string;
  price: number;
}
