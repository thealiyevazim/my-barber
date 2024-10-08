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
    updateAvatar: (avatar: string) => `/client/upload-avatar?avatar=${avatar}`,
    barbers: (page: number) => `/barbers?page=${page}`,
    clientGetMe: () => `/client/getMe`,
  },
};
