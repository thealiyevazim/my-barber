import React, { useCallback } from "react";
import { ProfileComponent } from "~components";
import { Routes } from "~navigation";
import { useTypedNavigation } from "~shared";
import { logout, useAppDispatch, useBarberData } from "~store";

export const ProfileScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { navigate } = useTypedNavigation<"barber" | "client">();

  const barberData = useBarberData()

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleGoEdit = useCallback(() => {
    navigate(Routes.profileEditScreen);
  }, []);

  const handleLanguage = useCallback(() => {

  }, []);

  return (
    <ProfileComponent
      name={barberData?.full_name}
      customerNumber={"92 customers"}
      logOutPress={handleLogout}
      goEditPress={handleGoEdit}
      goToLanguage={handleLanguage}
    />
  );
};
