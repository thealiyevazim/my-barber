export const getApiPath = {
  auth: {
    barberLogin: () => `/barber/login`,
    barberRegister: () => `/barber/register`,
    clientLogin: () => `/client/login`,
  },
  barber: {
    uploadAvatar: (id: string) => `/barber/upload-avatar/${id}`,
    update: (id: string) => `/barber/update/${id}`,
  },
};
