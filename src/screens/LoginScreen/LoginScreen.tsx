import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { AppButton, AppInput, BottomComponent } from "~components";
import { ClientNavigationProp } from "~navigation";
import { SafeAreaTemplate } from "~templates";
import { formatPhoneNumber } from "~utils";

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation<ClientNavigationProp<"LoginScreen">>();

  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNextPage = useCallback(() => {
    navigation.navigate("EnterPhoneNumber");
  }, []);

  const handleChangeText = (value: string) => {
    const formattedValue = formatPhoneNumber(value);
    setPhoneNumber(formattedValue);
  };

  return (
    <SafeAreaTemplate isDark>
      <BottomComponent bottomStyles={styles.container}>
        <View>
          <AppInput
            isPhoneNumber
            value={phoneNumber}
            style={styles.input}
            onChangeText={handleChangeText}
            keyboardType="number-pad"
            placeholder="Telefon raqamingiz"
          />
          <AppInput placeholder="Parolingiz" isSecure />
        </View>
        <View>
          <AppButton title="Tizimga kirish" disabled />
          <AppButton title="Ro'yxatdan o'tish" onPress={handleNextPage} />
        </View>
      </BottomComponent>
    </SafeAreaTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
  input: {
    marginBottom: 15,
  },
});
