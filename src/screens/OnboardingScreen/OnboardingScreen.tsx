import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { OnboardingPagerView } from "~components";
import { Routes } from "~navigation";
import { useTypedNavigation } from "~shared";
import { SafeAreaTemplate } from "~templates";

export const OnboardingScreen: React.FC = () => {
  const { navigate } = useTypedNavigation();

  const onNavigateNextPage = useCallback(() => {
    navigate(Routes.selectRoleScreen);
  }, []);

  return (
    <SafeAreaTemplate>
      <View style={styles.container}>
        <OnboardingPagerView onPress={onNavigateNextPage} />
      </View>
    </SafeAreaTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: "10%",
  },
});
