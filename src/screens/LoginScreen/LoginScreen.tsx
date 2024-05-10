import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { AppButton, AppInput, BottomComponent } from "~components";
import { BarberNavigationProp } from "~navigation";
import { SafeAreaTemplate } from "~templates";

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation<BarberNavigationProp<"LoginScreen">>();

  const handleNextPage = useCallback(() => {
    navigation.navigate("SignupScreen");
  }, []);

  const onLoginPress = useCallback(() => {}, []);

  return (
    <SafeAreaTemplate isDark>
      <BottomComponent bottomStyles={styles.container}>
        <View>
          <AppInput style={styles.input} placeholder="Login" />
          <AppInput placeholder="Parolingiz" isSecure />
        </View>
        <View>
          <AppButton title="Tizimga kirish" onPress={onLoginPress} />
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
