import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Modal from "react-native-modal";
import LeftBack from '~assets/icons/ArrowLeft';
import { palette } from '~utils/theme';

interface Props {
  isVisible: boolean,
  onPress: () => void,
  handleSubmit: () => void,
}

const BookDataModal = ({ isVisible, onPress, handleSubmit }: Props) => {
  return (
    <Modal
      isVisible={isVisible}
    >
      <View style={styles.modalBody}>
        <TouchableOpacity style={styles.backButtonStyle} hitSlop={{ left: 10, top: 10, bottom: 10, right: 10 }} onPress={onPress}>
          <LeftBack color="#181818" />
        </TouchableOpacity>
        <View style={styles.confrimTopDiv}>
          <View style={styles.textCenter}>
            <Text style={styles.leftGrayText}>Service</Text>
            <Text style={styles.rightBlackText}>Shaving</Text>
          </View>
          <View style={styles.textCenter}>
            <Text style={styles.leftGrayText}>Quantity</Text>
            <Text style={styles.rightBlackText}>1 person</Text>
          </View>
          <View style={styles.textCenter}>
            <Text style={styles.leftGrayText}>Address</Text>
            <Text style={styles.rightBlackText}>Uchtepa tumani,Mahorat 23</Text>
          </View>
          <View style={styles.textCenter}>
            <Text style={styles.leftGrayText}>Booking date</Text>
            <Text style={styles.rightBlackText}>Monday,12 June 2024</Text>
          </View>
          <View style={styles.textCenter}>
            <Text style={styles.leftGrayText}>Booking time</Text>
            <Text style={styles.rightBlackText}>11:30 AM</Text>
          </View>
        </View>
        <View style={styles.confrimBottomDiv}>
          <View style={styles.totalStyle}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalSum}>80 000</Text>
          </View>
        </View>
        <View style={styles.confrimButtonDiv}>
          <TouchableOpacity style={styles.confrimButton} onPress={handleSubmit}>
            <Text style={styles.confrimText}>Confrim</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default BookDataModal

const styles = StyleSheet.create({
  modalBody: {
    width: 325,
    height: 562,
    borderRadius: 8,
    backgroundColor: palette.white,
    flexDirection: 'column',
    paddingVertical: 15,
    justifyContent: 'center',
  },
  backButtonStyle: {
    marginHorizontal: 15,
    marginBottom: 15,
  },
  confrimTopDiv: {
    flexDirection: 'column',
    borderBottomColor: palette.personGray,
    borderBottomWidth: 1,
    gap: 20,
    paddingHorizontal: 15,
    paddingBottom: 24,
  },
  textCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftGrayText: {
    fontSize: 14,
    fontWeight: '400',
    color: palette.totalGray,
  },
  rightBlackText: {
    fontSize: 16,
    fontWeight: '400',
    color: palette.mainBlack,
  },
  confrimBottomDiv: {
    marginTop: 24,
    paddingHorizontal: 15,
  },
  totalStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalText: {
    fontSize: 16,
    fontWeight: '400',
    color: palette.totalGray,
  },
  totalSum: {
    fontSize: 18,
    fontWeight: '500',
    color: palette.mainBlack,
  },
  confrimButtonDiv: {
    marginTop: 165,
  },
  confrimButton: {
    width: 305,
    height: 52,
    borderRadius: 8,
    backgroundColor: palette.mainBlack,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  confrimText: {
    color: palette.white,
    fontSize: 20,
    fontWeight: '700',
  },
})