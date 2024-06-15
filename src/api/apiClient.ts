import { BarberLoginData, BarberLoginDataResponse, ClientLoginData, ClientLoginDataResponse, getApiPath } from "~shared";
import { BaseApi } from "./api";

class AccountApi extends BaseApi {
  async barberLogin(data: BarberLoginData) {
    return this.post<any, BarberLoginDataResponse>(
      getApiPath.auth.barberLogin(),
      data
    );
  }

  async clientLogin(data: ClientLoginData) {
    return this.post<any, ClientLoginDataResponse>(
      getApiPath.auth.barberLogin(),
      data
    );
  }
}

export const clientApi = new AccountApi();
