import {
  AddServiceData,
  AddServiceResponse,
  BarberLoginData,
  BarberLoginDataResponse,
  BarbersData,
  BarberUpdateData,
  BarberUpdateDataResponse,
  ClientLoginData,
  ClientLoginDataResponse,
  ClientUpdateData,
  ClientUpdateDataResponse,
  getApiPath,
  ServiceData,
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
  async clientUpdate(data: ClientUpdateData) {
    return this.put<any, ClientUpdateDataResponse>(
      getApiPath.barber.update(),
      data,
    );
  }

  async barberService() {
    return this.get<ServiceData>(getApiPath.barber.service());
  }

  async barbers() {
    return this.get<BarbersData>(getApiPath.client.barbers());
  }

  async addService(data: AddServiceData[]) {
    return this.post<any, AddServiceResponse>(
      getApiPath.barber.addService(),
      data,
    );
  }
}

export const clientApi = new AccountApi();
