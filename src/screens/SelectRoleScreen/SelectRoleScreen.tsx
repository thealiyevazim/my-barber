import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Image, StyleSheet, View } from "react-native";
import LogoIcon from "~assets/images/onboarding-logo.png";
import { AppButton, AppText } from "~components";
import { AuthenticationNavigationProp } from "~navigation";
import { SafeAreaTemplate } from "~templates";
import { colors } from "~utils";

export const SelectRoleScreen: React.FC = () => {
  const navigation =
    useNavigation<AuthenticationNavigationProp<"OnboardingNavigator">>();

  const handleClient = useCallback(() => {
    navigation.navigate("ClientNavigator");
  }, []);

  const handleBarber = useCallback(() => {
    navigation.navigate("BarberNavigator");
  }, []);

  return (
    <SafeAreaTemplate>
      <View style={styles.container}>
        <Image source={LogoIcon} />
        <View style={styles.textView}>
          <AppText style={styles.title} semibold>
            Hush kelibsiz!
          </AppText>
          <AppText style={styles.description}>
            Kim bo’lib davom etishingizni tanlang.
          </AppText>
        </View>
        <View>
          <AppButton title="Mijoz" onPress={handleClient} />
          <AppButton title="Barber" onPress={handleBarber} />
        </View>
      </View>
    </SafeAreaTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
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
