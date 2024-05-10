import { Entypo } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "~utils";
import { AppInput } from "../AppInput";

type Props = {
  onNotificationPress: () => void;
};

export const MainSearch: React.FC<Props> = ({ onNotificationPress }) => {
  return (
    <View style={styles.container}>
      <AppInput
        style={{ width: "90%" }}
        placeholder="Izlash"
        leftIcon={"magnifying-glass"}
      />
      <Entypo
        size={30}
        name="bell"
        color={colors.appBlack}
        onPress={onNotificationPress}
        style={{ marginTop: "-4%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
