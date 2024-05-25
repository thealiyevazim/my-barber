import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '~utils';
import { AppText } from '~components/AppText';

interface MockTimeDataProps {
  time: string,
  bookTime?: boolean
}

export const MockTimeData: React.FC<MockTimeDataProps> = ({
  time,
  bookTime
}) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.time}>{time}</AppText>
      {bookTime && (<TouchableOpacity style={styles.clientTimeWrapper}>
        <Image
          style={styles.clientAvatar}
          source={{ uri: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg' }}
        />
        <View style={styles.wrapper}>
          <AppText style={styles.timeAndName}>10:00 - 11:00 • Soqolni kesish</AppText>
          <AppText style={styles.timeAndName}>Akbarali Mallayev</AppText>
        </View>
        <View style={styles.valueWrapper}>
          <AppText style={styles.value}>Yangi</AppText>
        </View>
      </TouchableOpacity>)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 2,
    borderBottomWidth: 1,
    borderBottomColor: colors.iconGray,
    alignItems: "center"
  },
  time: {
    color: colors.iconGray,
    fontSize: 18,
  },
  clientTimeWrapper: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.iconGray,
    marginLeft: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between"
  },
  clientAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  wrapper: {
    marginRight: 12
  },
  timeAndName: {
    color: colors.appBlack,
    fontSize: 11,
  },
  valueWrapper: {
    paddingVertical: 3,
    paddingHorizontal: 6,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  value: {
    color: colors.appGreen,
    fontSize: 11,
  }
});
