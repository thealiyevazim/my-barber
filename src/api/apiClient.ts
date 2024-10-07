import {
  AddImagesData,
  AddImagesResponse,
  AddServiceData,
  AddServiceResponse,
  BarberGetMeData,
  BarberLoginData,
  BarberLoginDataResponse,
  BarbersData,
  BarberUpdateData,
  BarberUpdateDataResponse,
  ClientGetMeData,
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

  async barbers(page: number) {
    return this.get<BarbersData>(getApiPath.client.barbers(page));
  }

  async addService(data: AddServiceData[]) {
    return this.post<any, AddServiceResponse>(
      getApiPath.barber.addService(),
      data,
    );
  }

  async barberGetMe() {
    return this.get<BarberGetMeData>(getApiPath.barber.barberGetMe());
  }

  async clientGetMe() {
    return this.get<ClientGetMeData>(getApiPath.client.clientGetMe());
  }

  async barberAddImage(data: AddImagesData) {
    return this.post<any, AddImagesResponse>(
      getApiPath.barber.barberAddImage(),
      data,
    );
  }
}

export const clientApi = new AccountApi();
