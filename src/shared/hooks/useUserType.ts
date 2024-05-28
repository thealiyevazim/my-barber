import { useEffect, useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { UserTypesEnum } from "~enums";
import { storage } from "~shared";

export const useUserType = (selectedRole?: UserTypesEnum) => {
  const [userType, setUserType] = useState<UserTypesEnum | null | string>();

  useEffect(() => {
    const fetchUserType = async () => {
      const storedUserType = await storage.getUserType();
      setUserType(storedUserType);
    };

    fetchUserType();
  }, []);

  useFocusEffect(
    useCallback(() => {
      const updateUserType = async () => {
        if (selectedRole) {
          if (selectedRole === UserTypesEnum.Barber) {
            await storage.setUserType(UserTypesEnum.Barber);
          } else {
            await storage.setUserType(UserTypesEnum.Client);
          }
        }
      };

      updateUserType();
    }, [selectedRole])
  );

  return userType;
};
