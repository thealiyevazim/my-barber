import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Image, Pressable, StatusBar, StyleSheet, View } from "react-native";
import BackIcon from "~assets/images/arrow-right.png";

export const AppHeader: React.FC = () => {
  const navigation = useNavigation();
  const statusBarHeight = StatusBar.currentHeight || 0;

  const marginTop = statusBarHeight + 60;

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <View style={[styles.container, { marginTop }]}>
      <Pressable onPress={handleGoBack}>
        <Image source={BackIcon} style={styles.icon} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  icon: {
    transform: [{ rotate: "180deg" }],
  },
});
