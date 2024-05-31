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
};

export const SafeAreaTemplate: React.FC<Props> = ({
  children,
  style,
  isDark,
  scrollable,
  goBack = false,
}) => {
  return (
    <SafeAreaView
      style={[
        style,
        styles.container,
        { backgroundColor: isDark ? colors.appBlack : colors.appBackground },
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
