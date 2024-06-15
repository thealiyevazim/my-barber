import React from 'react';
import { Feather, Octicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { AppText } from '~components';
import { colors } from '~utils';

interface Props {
  schedulePress?: () => void;
  tablePress?: () => void;
  activeButton?: string;
}

export const MainTopTabNavigation: React.FC<Props> = ({
  schedulePress,
  tablePress,
  activeButton,
}) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          activeButton === 'schedule' ? styles.activeButton : null
        ]}
        onPress={schedulePress}
      >
        <Octicons
          name={"table"}
          size={18}
          color={colors.appBlack}
        />
        <AppText style={styles.buttonTitle}>Calendar</AppText>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          activeButton === 'table' ? styles.activeButton : null
        ]}
        onPress={tablePress}
      >
        <Feather
          name={"list"}
          size={18}
          color={colors.appBlack}
        />
        <AppText style={styles.buttonTitle}>Tarix</AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    padding: 4,
    backgroundColor: colors.appGray,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 170,
    borderRadius: 12,
    paddingVertical: 9,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 2,
    backgroundColor: colors.appGray,
  },
  buttonTitle: {
    fontSize: 18,
    marginLeft: 10
  },
  activeButton: {
    backgroundColor: colors.white,
  }
});
