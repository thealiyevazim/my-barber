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
  avatar: any;
  services?: Service[];
}
export interface Service {
  name: string;
  price: number;
}
