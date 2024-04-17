import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { AppButton, AppInput, BottomComponent } from "~components";
import { ClientNavigationProp } from "~navigation";
import { SafeAreaTemplate } from "~templates";

export const EnterFullNameScreen: React.FC = () => {
  const navigation =
    useNavigation<ClientNavigationProp<"EnterFullNameScreen">>();

  const handleGoNextPage = useCallback(() => {
    navigation.navigate("AuthLoadingScreen");
  }, []);

  return (
    <SafeAreaTemplate isDark>
      <BottomComponent bottomStyles={styles.container}>
        <View>
          <AppInput placeholder="Ismingiz" />
          <AppInput placeholder="Familiyangiz" />
        </View>
        <AppButton title="Tasdiqlash" onPress={handleGoNextPage} />
      </BottomComponent>
    </SafeAreaTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
});