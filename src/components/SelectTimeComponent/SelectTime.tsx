import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Platform, Button, FlatList } from 'react-native';
import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';
import { AppText } from '~components';
import { colors } from '~utils';

interface Period {
  period: string;
}

const periodTime: Period[] = [
  { period: "AM" },
  { period: "PM" }
]

export const SelectTime: React.FC = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [dropdownPeriod, setDropdownPeriod] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>("AM");
  const [selectedPeriod, setSelectedPeriod] = useState<Period | null>(null);

  const handlePickerChange = (event: DateTimePickerEvent, date?: Date | undefined) => {
    if (event.type === "set" && date) {
      setSelectedTime(date);
    }
  };

  const formatTime = (date: Date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    return `${formattedHours}:${formattedMinutes}`;
  };

  const showTimePicker = () => {
    setShowPicker(true);
  };

  const handleModalClose = () => {
    setShowPicker(false);
  };

  const handleModalConfirm = () => {
    setShowPicker(false);
  };

  const handlePeriodPress = () => {
    setDropdownPeriod(!dropdownPeriod);
  };

  const handlePeriodSelect = (periodTime: Period) => {
    setSelectedPeriod(periodTime);
    setPeriod(periodTime.period);
    setDropdownPeriod(false);
  };

  const renderPeriodItem = ({ item }: { item: Period }) => (
    <TouchableOpacity
      style={styles.optionItem}
      onPress={() => handlePeriodSelect(item)}
    >
      <View style={styles.labelContainer}>
        <Text style={styles.labelStyle}>{item.period}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showTimePicker} style={styles.time}>
        <AppText>{formatTime(selectedTime)}</AppText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.time} onPress={handlePeriodPress}>
        <AppText>{period}</AppText>
      </TouchableOpacity>
      {showPicker && (
        Platform.OS === 'ios' ? (
          <Modal isVisible={showPicker} onBackdropPress={() => setShowPicker(false)}>
            <View style={styles.modalContent}>
              <RNDateTimePicker
                mode="time"
                value={selectedTime}
                display="spinner"
                onChange={handlePickerChange}
                is24Hour={false}
              />
              <Button title='OK' onPress={handleModalConfirm} />
            </View>
          </Modal>
        ) : (
          showPicker && (
            <RNDateTimePicker
              mode="time"
              value={selectedTime}
              display="default"
              onChange={handlePickerChange}
              is24Hour={false}
            />
          )
        )
      )}
      {dropdownPeriod && (
        <View style={styles.dropdownPeriodContainer}>
          <FlatList
            data={periodTime}
            renderItem={renderPeriodItem}
            keyExtractor={(item) => item.period}
            contentContainerStyle={styles.flatListContent}
            style={styles.flatList}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  time: {
    alignItems: 'center',
    justifyContent: "center",
    width: 165,
    borderRadius: 4,
    backgroundColor: colors.white,
    paddingVertical: 10
  },
  dropdownPeriodContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 4,
    elevation: 4,
    marginTop: 40
  },
  optionItem: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },
  labelStyle: {
    color: colors.appBlack,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    height: 28,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  flatList: {
    height: 150
  },
  flatListContent: {
    backgroundColor: colors.white,
    borderRadius: 4,
    width: 165,
  },
});