export interface BarberUpdateData {
  full_name: string;
  phone: string;
  location: string;
  working_hours: string;
  birth_date: string;
}

export interface BarberUpdateDataResponse {
  data: BarberUpdate;
}

export interface BarberUpdate {
  id: string;
  username: string;
  full_name: string;
  phone: string;
  location: string;
  birth_date: string;
  working_hours: string;
  avatar: string;
}

export interface ClientUpdateData {
  full_name: string;
  phone: string;
}
export interface ClientAvatarUpdateData {
  avatar: string;
}

export interface ClientUpdateDataResponse {
  data: ClientUpdate;
}
export interface ClientUpdateAvatarDataResponse {
  data: {
    url: string;
  };
}

export interface ClientUpdate {
  id: string;
  username: string;
  full_name: string;
  phone: string;
  avatar: string;
}
