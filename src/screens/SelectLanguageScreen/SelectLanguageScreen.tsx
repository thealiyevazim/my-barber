import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Image, StyleSheet, View } from "react-native";
import LogoIcon from "~assets/images/onboarding-logo.png";
import { AppButton, AppText, LanguagePicker } from "~components";
import { Routes } from "~navigation";
import { useTypedNavigation } from "~shared";
import { SafeAreaTemplate } from "~templates";

export const SelectLanguageScreen: React.FC = () => {
  const { navigate } = useTypedNavigation<"start">();

  const handleNavigation = useCallback(() => {
    navigate(Routes.onboardingScreen);
  }, []);

  return (
    <SafeAreaTemplate>
      <View style={styles.container}>
        <Image source={LogoIcon} style={styles.logo} />
        <AppText style={styles.text}>
          Select the language of the application
        </AppText>
        <LanguagePicker />
        <AppButton title="Confirm" onPress={handleNavigation} />
      </View>
    </SafeAreaTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  logo: {},
  text: {
    fontSize: 24,
    textAlign: "center",
  },
});
