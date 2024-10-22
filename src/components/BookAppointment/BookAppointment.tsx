import React, { useCallback, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { GoBackIcon } from '~assets/icons';
import {
  AppButton,
  AppText,
  BookedConfirm,
  SelectDateComponent,
  SelectService,
  SelectTime,
} from '~components';
import { useTypedNavigation } from '~shared';
import { SafeAreaTemplate } from '~templates';
import { colors } from '~utils';

interface Option {
  label: string;
  value: string;
  price: string;
}

const data: Option[] = [
  { label: 'Shaving', price: '80000', value: '1' },
  { label: 'Haircut', price: '50000', value: '2' },
  { label: 'Styling', price: '100000', value: '3' },
  { label: 'Coloring', price: '50000', value: '4' },
  { label: 'Hairdryer', price: '25000', value: '5' },
];

export const BookAppointment: React.FC = () => {
  const { goBack } = useTypedNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectDate, setSelectDate] = useState(new Date().toISOString());
  const [selected, setSelected] = useState<string[]>([]);
  const [selectTime, setSelectTime] = useState<string>('');

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleSelectDate = (date: string) => {
    setSelectDate(date);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  // Formatting date
  const formattedDate = new Date(selectDate).toLocaleDateString('uz-UZB', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // Calculate Total Price
  function calculateSelectedTotalPrice(
    data: Option[],
    selected: string[],
  ): number {
    return data
      .filter(data => selected.includes(data.value))
      .reduce((total, data) => total + parseInt(data.price), 0);
  }

  // Get selected services
  const getSelectedServices = (data: Option[], selected: string[]): string => {
    return data
      .filter(option => selected.includes(option.value))
      .map(option => option.label)
      .join(', ');
  };

  const generateTimeData = () => {
    const times = [];
    for (let i = 0; i < 24; i++) {
      const label = i.toString().padStart(2, '0') + ':00';
      times.push({ label, value: label });
    }
    return times;
  };

  const timeData = generateTimeData();
  const totalPrice = calculateSelectedTotalPrice(data, selected);
  const selectedServices = getSelectedServices(data, selected);

  return (
    <SafeAreaTemplate>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.7} onPress={handleGoBack}>
          <GoBackIcon style={styles.icon} stroke={colors.appBlack} />
        </TouchableOpacity>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <AppText semibold style={styles.headerTitle}>
            Book Appointment
          </AppText>
        </View>
      </View>
      <AppText style={styles.title}>Select Date</AppText>
      <SelectDateComponent
        selectDate={selectDate}
        onSelectDate={handleSelectDate}
      />
      <AppText style={styles.title}>Select Time</AppText>
      <SelectTime
        selectTime={selectTime}
        setSelectTime={setSelectTime}
        data={timeData}
      />
      <AppText style={styles.title}>Service</AppText>
      <SelectService
        selected={selected}
        setSelected={setSelected}
        data={data}
      />
      {/* <AppText style={styles.title}>How many person?</AppText> */}
      {/* <SelectPeople addPerson={addPerson} setAddPerson={setAddPerson} /> */}
      <View style={styles.totalWrapper}>
        <AppText style={styles.total}>Total price: {totalPrice} so'm</AppText>
      </View>
      <View style={styles.buttonWrapper}>
        <AppButton title="Next" onPress={openModal} />
      </View>
      <BookedConfirm
        isVisible={modalVisible}
        onPress={closeModal}
        handleSubmit={closeModal}
        service={selectedServices}
        address={'Uchtepa tumani, Mahorat 23'}
        date={formattedDate}
        time={selectTime}
        total={totalPrice}
      />
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
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  totalWrapper: {
    marginTop: 20,
    alignItems: 'center',
    paddingVertical: 14,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  total: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.appBlack,
  },
});
