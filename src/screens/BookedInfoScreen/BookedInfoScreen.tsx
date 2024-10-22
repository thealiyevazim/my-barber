import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import React, { useCallback } from 'react';
import { SafeAreaTemplate } from '~templates';
import { AppText } from '~components';
import { useTypedNavigation } from '~shared';
import { colors } from '~utils';
import { GoBackIcon } from '~assets/icons';

export const BookedInfoScreen: React.FC = () => {
  const { goBack } = useTypedNavigation();

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleGoCall = () => {
    const phoneNumber = '+998901234567';
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <SafeAreaTemplate>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.7} onPress={handleGoBack}>
          <GoBackIcon style={styles.icon} stroke={colors.appBlack} />
        </TouchableOpacity>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <AppText semibold style={styles.headerTitle}>
            Bron qilingan
          </AppText>
        </View>
      </View>
      <View style={styles.container}>
        <AppText style={styles.bookedTime}>06 Mart, 12:00</AppText>
        <View style={styles.wrapper}>
          <AppText style={styles.label}>Sana</AppText>
          <AppText style={styles.value}>06 Mart, Dushanba </AppText>
        </View>
        <View style={styles.wrapper}>
          <AppText style={styles.label}>Xizmat</AppText>
          <AppText style={styles.value}>Soqol kesish </AppText>
        </View>
        <View style={styles.wrapper}>
          <AppText style={styles.label}>Vaqt</AppText>
          <AppText style={styles.value}>12:00 </AppText>
        </View>
        <View style={styles.wrapper}>
          <AppText style={styles.label}>Mijoz</AppText>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.callButton}
            onPress={handleGoCall}>
            <View>
              <AppText style={styles.value}>Ozod Norbekov </AppText>
              <AppText style={styles.value}>+998 90 123 45 67 </AppText>
            </View>
            <GoBackIcon style={styles.iconCall} stroke={colors.iconGray} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaTemplate>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 30,
  },
  headerTitle: {
    alignSelf: 'center',
    fontSize: 22,
  },
  icon: {
    transform: [{ rotate: '180deg' }],
  },
  title: {
    fontSize: 16,
    marginTop: 15,
    marginBottom: 12,
  },
  container: {
    width: '100%',
    marginTop: 12,
  },
  bookedTime: {
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 32,
  },
  wrapper: {
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: colors.iconGray,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    color: colors.iconGray,
    marginBottom: 5,
  },
  callButton: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconCall: {
    transform: [{ rotate: '0deg' }],
  },
});
