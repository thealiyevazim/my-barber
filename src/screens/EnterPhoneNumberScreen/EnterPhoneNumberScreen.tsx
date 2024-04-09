import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { StyleSheet } from "react-native";
import { AppButton, AppInput, BottomComponent } from "~components";
import { ClientNavigationProp } from "~navigation";
import { SafeAreaTemplate } from "~templates";
import { formatPhoneNumber } from "~utils/formatPhoneNumber";

export const EnterPhoneNumberScreen: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation<ClientNavigationProp<"EnterPhoneNumber">>();

  const handleChangeText = (value: string) => {
    const formattedValue = formatPhoneNumber(value);
    setPhoneNumber(formattedValue);
  };

  const handleNextPage = useCallback(() => {
    navigation.navigate("EnterOtpScreen", {
      phoneNumber: `+998 ${phoneNumber}`,
    });
  }, [phoneNumber]);

  return (
    <SafeAreaTemplate isDark>
      <BottomComponent bottomStyles={styles.bottom}>
        <AppInput
          isPhoneNumber
          value={phoneNumber}
          keyboardType="number-pad"
          placeholder="Telefon raqamingiz"
          onChangeText={handleChangeText}
        />
        <AppButton
          disabled={!Boolean(phoneNumber.length > 11)}
          onPress={handleNextPage}
          title="Parolni qabul qilish"
        />
      </BottomComponent>
    </SafeAreaTemplate>
  );
};

const styles = StyleSheet.create({
  bottom: { justifyContent: "space-between" },
});
