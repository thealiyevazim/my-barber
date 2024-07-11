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
  },
  client: {
    update: () => `/client/update`,
  },
};
