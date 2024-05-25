import React, { useState } from 'react';
import { Feather, Octicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { AppText } from '~components';
import { colors } from '~utils';

export const MainTopTabNavigation: React.FC = () => {

  const [activeButton, setActiveButton] = useState<string | null>("schedule");

  const handlePress = (button: string) => {
    setActiveButton(button);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          activeButton === 'schedule' ? styles.activeButton : null
        ]}
        onPress={() => handlePress('schedule')}
      >
        <Octicons
          name={"table"}
          size={18}
          color={colors.appBlack}
        />
        <AppText style={styles.buttonTitle}>Jadval</AppText>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          activeButton === 'list' ? styles.activeButton : null
        ]}
        onPress={() => handlePress('list')}
      >
        <Feather
          name={"list"}
          size={18}
          color={colors.appBlack}
        />
        <AppText style={styles.buttonTitle}>Ro’yxat</AppText>
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
    justifyContent: "center"
  },
  button: {
    borderRadius: 12,
    paddingVertical: 9,
    paddingHorizontal: 40,
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
