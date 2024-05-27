import { Picker } from "@react-native-picker/picker";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { UserTypesEnum } from "~enums";
import { storage } from "~shared";
import { useAppDispatch, userTypeActions } from "~store";

export const RolePicker: React.FC = () => {
  const dispatch = useAppDispatch();
  const [selectedRole, setSelectedRole] = useState(UserTypesEnum.Barber);

  useFocusEffect(
    useCallback(() => {
      const updateUserType = async () => {
        if (selectedRole === UserTypesEnum.Barber) {
          dispatch(userTypeActions.setUserType(selectedRole));
          await storage.setUserType(UserTypesEnum.Barber);
        } else {
          dispatch(userTypeActions.setUserType(selectedRole));
          await storage.setUserType(UserTypesEnum.Client);
        }
      };

      updateUserType();
    }, [selectedRole])
  );

  return (
    <Picker
      selectedValue={selectedRole}
      onValueChange={(itemValue) => setSelectedRole(itemValue)}
      style={{ width: "100%" }}
    >
      <Picker.Item label="Barber" value="barber" />
      <Picker.Item label="Mijoz" value="mijoz" />
    </Picker>
  );
};
