import { StyleSheet, TouchableOpacity, View, Text, Button } from 'react-native';
import React, { useCallback, useState } from 'react';
import { SafeAreaTemplate } from '~templates';
import { AppButton, AppText, SelectDateComponent, SelectPeople, SelectService, SelectTime } from '~components';
import { GoBackIcon } from "~assets/icons";
import { colors } from '~utils';
import { useTypedNavigation } from '~shared';
import Modal from 'react-native-modal';

export const BookAppointmentScreen: React.FC = () => {
  const { goBack } = useTypedNavigation();
  const [openDay, setOpenDay] = useState<boolean>(false)

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const [selectDate, setSelectDate] = useState(new Date().toISOString());

  const handleSelectDate = (date: string) => {
    setSelectDate(date);
    setOpenDay(true)
  };

  return (
    <SafeAreaTemplate>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.7} onPress={handleGoBack}>
          <GoBackIcon style={styles.icon} stroke={colors.appBlack} />
        </TouchableOpacity>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <AppText semibold style={styles.headerTitle}>Book Appointment</AppText>
        </View>
      </View>
      <AppText style={styles.title}>Select Date</AppText>
      <SelectDateComponent selectDate={selectDate} onSelectDate={handleSelectDate} />
      <AppText style={styles.title}>Select Time</AppText>
      <SelectTime />
      <AppText style={styles.title}>Service</AppText>
      <SelectService />
      <AppText style={styles.title}>How many person?</AppText>
      <SelectPeople />
      <View style={styles.buttonWrapper}>
        <AppButton title='Next' />
      </View>
      <Modal isVisible={openDay} onBackdropPress={() => setOpenDay(false)}>
        <View style={styles.bookedDayWrapper}>
          <AppText>9:00 - 10: 00</AppText>
          <AppText>
            Item
          </AppText>
          <Button title='OK' onPress={() => setOpenDay(false)} />
        </View>
      </Modal>
    </SafeAreaTemplate>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 30,
  },
  headerTitle: {
    alignSelf: "center",
    fontSize: 22
  },
  icon: {
    transform: [{ rotate: "180deg" }],
  },
  title: {
    fontSize: 16,
    marginTop: 34,
    marginBottom: 12
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: "flex-end"
  },
  bookedDayWrapper: {
    width: "90%",
    height: 100,
    backgroundColor: colors.white
  }
});
