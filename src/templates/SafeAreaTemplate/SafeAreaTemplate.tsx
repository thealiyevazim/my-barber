import React from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "~utils";

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  isDark?: boolean;
};

export const SafeAreaTemplate: React.FC<Props> = ({
  children,
  style,
  isDark,
}) => {
  return (
    <SafeAreaView
      style={[
        style,
        styles.container,
        { backgroundColor: isDark ? colors.appBlack : colors.white },
      ]}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
