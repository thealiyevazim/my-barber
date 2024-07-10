import {
  BarberLoginData,
  BarberLoginDataResponse,
  BarberUpdateData,
  BarberUpdateDataResponse,
  ClientLoginData,
  ClientLoginDataResponse,
  getApiPath,
} from '~shared';
import { BaseApi } from './api';

class AccountApi extends BaseApi {
  async barberLogin(data: BarberLoginData) {
    return this.post<any, BarberLoginDataResponse>(
      getApiPath.auth.barberLogin(),
      data,
    );
  }

  async clientLogin(data: ClientLoginData) {
    return this.post<any, ClientLoginDataResponse>(
      getApiPath.auth.clientLogin(),
      data,
    );
  }

  async barberUpdate(data: BarberUpdateData) {
    return this.put<any, BarberUpdateDataResponse>(
      getApiPath.barber.update(),
      data,
    );
  }
}

export const clientApi = new AccountApi();
