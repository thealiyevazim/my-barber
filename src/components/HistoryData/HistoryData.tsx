import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '~utils'
import { AppText } from '~components'
import { GoBackIcon } from "~assets/icons";

interface HistoryDataProps {
  onPress: () => void;
}

export const HistoryData: React.FC<HistoryDataProps> = ({
  onPress
}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={onPress}>
      <View style={styles.titleWrapper}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AppText style={styles.name}>Nodir Aliyev</AppText>
          <View style={styles.labelWrapper}>
            <AppText style={styles.label}>Yangi</AppText>
          </View>
        </View>
        <GoBackIcon style={styles.icon} stroke={colors.appGray} />
      </View>
      <AppText style={styles.date}>24 dekabr, Dushanba 10:00 - 11:00  </AppText>
      <AppText style={styles.service}>Soch turmaklash </AppText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: "100%",
    borderColor: colors.appGray,
    marginBottom: 12,
    borderRadius: 8,
    padding: 12
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  name: {
    fontSize: 17,
    fontWeight: "600"
  },
  labelWrapper: {
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 10,
    backgroundColor: colors.appGray,
    marginLeft: 12
  },
  label: {
    color: colors.appGreen
  },
  icon: {
    transform: [{ rotate: "0deg" }],
  },
  date: {
    color: colors.iconGray,
    marginTop: 4
  },
  service: {
    color: colors.iconGray,
    marginTop: 24
  }
})