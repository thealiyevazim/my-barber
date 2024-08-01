export interface BarberLoginData {
  nameDevice?: string;
  username: string;
  password: string;
  tokenDevice?: string;
}

export interface BarberLoginDataResponse {
  data: {
    barber: Barber;
    services: Service[];
    token: string;
  };
}

export interface Barber {
  id: string;
  username: string;
  full_name: string;
  phone: string;
  location: string;
  birth_date: string;
  working_hours: string;
  avatar: any;
}
export interface Service {
  id: string;
  barber_id: string;
  name: string;
  price: number;
}

export interface ClientLoginData {
  nameDevice?: string;
  username: string;
  password: string;
  tokenDevice?: string;
}

export interface Client {
  id: string;
  username: string;
  full_name: string;
  phone: string;
  location: string;
  birth_date: string;
  working_hours: string;
  avatar: string;
}

export interface ClientLoginDataResponse {
  data: {
    client: Client;
    token: string;
  };
}
