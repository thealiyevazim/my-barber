import React from "react";
import { AppButton } from "~components";
import { logout, useAppDispatch } from "~store";
import { SafeAreaTemplate } from "~templates";

export const ProfileScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <SafeAreaTemplate>
      <AppButton title="Logout" onPress={handleLogout} />
    </SafeAreaTemplate>
  );
};
