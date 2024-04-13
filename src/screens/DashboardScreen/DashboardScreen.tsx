import React from "react";
import { View } from "react-native";
import { AppText } from "~components";
import { SafeAreaTemplate } from "~templates";

export const DashboardScreen: React.FC = () => {
  return (
    <SafeAreaTemplate>
      <View>
        <AppText>Hello</AppText>
      </View>
    </SafeAreaTemplate>
  );
};
