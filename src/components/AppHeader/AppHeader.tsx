import React, { useCallback } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { GoBackIcon } from "~assets/icons";
import { useTypedNavigation } from "~shared";
import { colors } from "~utils";

export const AppHeader: React.FC = () => {
  const { goBack } = useTypedNavigation();

  const handleGoBack = useCallback(() => {
    goBack();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={handleGoBack}>
        <GoBackIcon style={styles.icon} stroke={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    width: 30,
    justifyContent: "center",
    alignContent: "center",
  },
  icon: {
    transform: [{ rotate: "180deg" }],
  },
});
