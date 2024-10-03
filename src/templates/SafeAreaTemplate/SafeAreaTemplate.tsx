import React from "react";
import { ScrollView, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppHeader } from "~components";
import { colors } from "~utils";

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  isDark?: boolean;
  scrollable?: boolean;
  goBack?: boolean;
  padding?: boolean
};

export const SafeAreaTemplate: React.FC<Props> = ({
  children,
  style,
  isDark,
  scrollable,
  goBack = false,
  padding = false,
}) => {
  return (
    <SafeAreaView
      style={[
        style,
        styles.container,
        { backgroundColor: isDark ? colors.appBlack : colors.appBackground, paddingHorizontal: padding ? 0 : 16 },
      ]}
    >
      {scrollable ? (
        <ScrollView>{children}</ScrollView>
      ) : (
        <>
          {goBack && <AppHeader />}
          {children}
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
