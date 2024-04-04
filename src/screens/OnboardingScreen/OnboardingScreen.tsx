import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { OnboardingPagerView } from "~components";
import { SafeAreaTemplate } from "~templates";

export const OnboardingScreen: React.FC = () => {
  // const navigation =
  //   useNavigation<AuthenticationNavigationProp<"OnboardingScreen">>();

  const onNavigateNextPage = useCallback(() => {
    // navigation.navigate("OnboardingScreen");
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
