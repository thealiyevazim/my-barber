import React, { useCallback } from "react";
import { ProfileComponent } from "~components";
import { Routes } from "~navigation";
import { useTypedNavigation } from "~shared";
import { logout, useAppDispatch, useBarberData } from "~store";

export const ProfileScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { navigate } = useTypedNavigation<"barber">();

  const barberData = useBarberData();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleGoEdit = useCallback(() => {
    navigate(Routes.profileEditScreen);
  }, []);

  // console.warn(barberData)

  return (
    <ProfileComponent
      name={"Jon Doe"}
      avatar={
        "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
      }
      customerNumber={"92 customers"}
      logOutPress={handleLogout}
      goEditPress={handleGoEdit}
    />
  );
};
