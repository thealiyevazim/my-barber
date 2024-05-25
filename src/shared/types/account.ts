export interface BarberLoginData {
  nameDevice?: string;
  username: string;
  password: string;
  tokenDevice?: string;
}

export interface BarberLoginDataResponse {
  barber: Barber;
  token: string;
}

export interface Barber {
  id: string;
  username: string;
  full_name: string;
  phone: string;
  location: string;
  birth_date: string;
  working_hours: string;
  avatar: string;
}
