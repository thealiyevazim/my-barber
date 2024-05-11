import { BarberLoginData, BarberLoginDataResponse, getApiPath } from "~shared";
import { BaseApi } from "./api";

class AccountApi extends BaseApi {
  async barberLogin(data: BarberLoginData) {
    return this.post<any, BarberLoginDataResponse>(
      getApiPath.auth.barberLogin(),
      data
    );
  }
}

export const clientApi = new AccountApi();
