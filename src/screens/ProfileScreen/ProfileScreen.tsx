import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import { ProfileComponent } from '~components';
import { UserTypesEnum } from '~enums';
import { Routes } from '~navigation';
import { useTypedNavigation, useUserType } from '~shared';
import {
  barberGetMeData,
  logout,
  useAppDispatch,
  useBarberGetMe,
  useClientGetMe,
  clientGetMeData,
} from '~store';

export const ProfileScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { navigate } = useTypedNavigation<'barber' | 'client'>();
  const userType = useUserType();

  const data =
    userType === UserTypesEnum.Barber ? useBarberGetMe() : useClientGetMe();

  // useFocusEffect(() => {
  //   if (userType === UserTypesEnum.Barber) {
  //     dispatch(barberGetMeData());
  //   } else {
  //     dispatch(clientGetMeData());
  //   }
  // });

  console.log(userType);

  useEffect(() => {
    if (userType === UserTypesEnum.Barber) {
      dispatch(barberGetMeData());
    } else {
      dispatch(clientGetMeData());
    }
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleGoEdit = useCallback(() => {
    navigate(Routes.profileEditScreen);
  }, []);

  return (
    <ProfileComponent
      name={data?.full_name}
      customerNumber={'92 customers'}
      logOutPress={handleLogout}
      goEditPress={handleGoEdit}
    />
  );
};
