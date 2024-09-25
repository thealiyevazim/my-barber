export const getApiPath = {
  auth: {
    barberLogin: () => `/barber/login`,
    barberRegister: () => `/barber/register`,
    clientLogin: () => `/client/login`,
  },
  barber: {
    uploadAvatar: (id: string) => `/barber/upload-avatar/${id}`,
    update: () => `/barber/update`,
    service: () => `/services`,
    addService: () => `/barber/add-service`,
    barberGetMe: () => `/barber/getMe`,
    barberAddImage: () => `/barber/add-image`,
  },
  client: {
    update: () => `/client/update`,
    barbers: () => `/barbers`,
    clientGetMe: () => `/client/getMe`,
  },
};
