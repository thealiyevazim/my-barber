export interface ClientGetMeData {
  ok: boolean;
  data: ClientGetMe;
}

export interface ClientGetMe {
  id: string;
  username: string;
  full_name: string;
  phone: string;
  avatar: any;
}
