import React, { useCallback } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { ArrowLeftIcon, GoBackIcon } from "~assets/icons";
import BackIcon from "~assets/images/arrow-right.png";
import { useTypedNavigation } from "~shared";
import { colors } from "~utils";

export const AppHeader: React.FC = () => {
  const { goBack } = useTypedNavigation();
  const statusBarHeight = StatusBar.currentHeight || 0;

  const marginTop = statusBarHeight + 60;

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
  container: {},
  icon: {
    transform: [{ rotate: "180deg" }],
  },
});
