import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
import { ProfileComponent } from "~components";
import { UserTypesEnum } from "~enums";
import { Routes } from "~navigation";
import { useTypedNavigation, useUserType } from "~shared";
import { barberGetMeData, logout, useAppDispatch, useBarberGetMe, useClientData } from "~store";

export const ProfileScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { navigate } = useTypedNavigation<"barber" | "client">();
  const userType = useUserType();

  const data = userType === UserTypesEnum.Barber ? useBarberGetMe() : useClientData()

  useFocusEffect(() => {
    dispatch(barberGetMeData());
  },);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleGoEdit = useCallback(() => {
    navigate(Routes.profileEditScreen);
  }, []);

  return (
    <ProfileComponent
      name={data?.full_name}
      customerNumber={"92 customers"}
      logOutPress={handleLogout}
      goEditPress={handleGoEdit}
    />
  );
};
