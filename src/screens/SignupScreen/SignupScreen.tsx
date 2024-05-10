import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { AppButton, AppInput, BottomComponent } from "~components";
import { BarberNavigationProp } from "~navigation";
import { SafeAreaTemplate } from "~templates";
import { colors } from "~utils";

export const SignupScreen: React.FC = () => {
  const navigation = useNavigation<BarberNavigationProp<"SignupScreen">>();

  const handleSignup = useCallback(() => {
    navigation.navigate("AuthLoadingScreen");
  }, []);

  return (
    <SafeAreaTemplate isDark>
      <BottomComponent bottomStyles={styles.container}>
        <View>
          <AppInput placeholder="Login" />
          <AppInput isSecure placeholder="Parol" />
          <AppInput isSecure placeholder="Parolni takrorlang" />
        </View>
        <AppButton title="Tasdiqlash" onPress={handleSignup} disabled={false} />
      </BottomComponent>
    </SafeAreaTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
  textView: {
    marginVertical: "30%",
  },
  title: {
    fontSize: 42,
    color: colors.appBlack,
    alignSelf: "flex-start",
  },
  description: {
    fontSize: 20,
    color: colors.appBlack,
    alignSelf: "flex-start",
  },
});
