import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { OnboardingPagerView } from "~components";
import { OnboardingNavigationProp } from "~navigation";
import { SafeAreaTemplate } from "~templates";

export const OnboardingScreen: React.FC = () => {
  const navigation =
    useNavigation<OnboardingNavigationProp<"OnboardingScreen">>();

  const onNavigateNextPage = useCallback(() => {
    navigation.navigate("SelectRoleScreen");
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
