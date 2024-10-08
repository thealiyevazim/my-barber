import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import { colors } from '~utils';
import { AppText } from '../AppText/AppText';
import { GoBackIcon } from '~assets/icons';

interface Props {
  isVisible: boolean;
  onPress?: () => void;
  handleSubmit: () => void;
  person?: number;
  service: string;
  address: string;
  date: string;
  time: string;
  total: number;
}

export const BookedConfirm: React.FC<Props> = ({
  isVisible,
  onPress,
  handleSubmit,
  person,
  service,
  address,
  date,
  time,
  total,
}) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modalBody}>
        <TouchableOpacity activeOpacity={0.7} onPress={handleSubmit}>
          <GoBackIcon style={styles.icon} stroke={colors.appBlack} />
        </TouchableOpacity>
        <View style={styles.confirmTopDiv}>
          <View style={styles.textCenter}>
            <AppText style={styles.leftGrayText}>Service</AppText>
            <AppText style={styles.rightBlackText}>{service}</AppText>
          </View>
          {/* <View style={styles.textCenter}>
            <AppText style={styles.leftGrayText}>Quantity</AppText>
            <AppText style={styles.rightBlackText}>{person} person</AppText>
          </View> */}
          <View style={styles.textCenter}>
            <AppText style={styles.leftGrayText}>Address</AppText>
            <AppText style={styles.rightBlackText}>{address}</AppText>
          </View>
          <View style={styles.textCenter}>
            <AppText style={styles.leftGrayText}>Booking date</AppText>
            <AppText style={styles.rightBlackText}>{date}</AppText>
          </View>
          <View style={styles.textCenter}>
            <AppText style={styles.leftGrayText}>Booking time</AppText>
            <AppText style={styles.rightBlackText}>{time}</AppText>
          </View>
        </View>
        <View style={styles.confirmBottomDiv}>
          <View style={styles.totalStyle}>
            <AppText style={styles.totalText}>Total</AppText>
            <AppText style={styles.totalSum}>{total} so'm</AppText>
          </View>
        </View>
        <View style={styles.confirmButtonDiv}>
          <TouchableOpacity style={styles.confirmButton} onPress={handleSubmit}>
            <Text style={styles.confirmText}>Confrim</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBody: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: colors.white,
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'center',
  },
  confirmTopDiv: {
    flexDirection: 'column',
    borderBottomColor: colors.appGray,
    borderBottomWidth: 1,
    gap: 20,
    paddingHorizontal: 10,
    paddingBottom: 24,
  },
  textCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftGrayText: {
    fontSize: 14,
    color: colors.appGray,
  },
  rightBlackText: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.appBlack,
  },
  confirmBottomDiv: {
    marginTop: 24,
    paddingHorizontal: 10,
  },
  totalStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalText: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.appGray,
  },
  totalSum: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.appBlack,
  },
  confirmButtonDiv: {
    marginTop: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  confirmButton: {
    width: '90%',
    height: 52,
    borderRadius: 8,
    backgroundColor: colors.appBlack,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
  },
  icon: {
    transform: [{ rotate: '180deg' }],
    marginBottom: 20,
  },
});
