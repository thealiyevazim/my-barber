import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { palette } from "~utils/theme";
import { ServiceComponent } from "~components/ServiceComponent";
import { BooKDataModal, CounterPeopleComponent, HeaderTitleArrow, NextButton, TitleComponent } from "~components";
import { CustomDatePicker } from "~components/CustomDatePicker";

const BookingBarber: React.FC = () => {

  const [modalVisible, setModalVisible] = useState(false);

  const [selectDate, setSelectDate] = useState(new Date().toISOString());

  const handleSelectDate = (date: string) => {
    setSelectDate(date);
  };

  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" />
        <View style={styles.mainContainer}>
          <HeaderTitleArrow title="Bron qilish" onPress={goBack} style={styles.appoinment} />
          <TitleComponent title='Kunni tanlang' size />
          <CustomDatePicker selectDate={selectDate} onSelectDate={handleSelectDate} />
          <TitleComponent title='Service' size />
          <ServiceComponent />
          <TitleComponent title='Necha kishi?' size />
          <CounterPeopleComponent />
          <NextButton btnTitle="Next" handleClick={openModal} />
        </View>
      </View>
      <BooKDataModal isVisible={modalVisible} onPress={closeModal} handleSubmit={closeModal} />
    </>
  );
};

export default BookingBarber;

const styles = StyleSheet.create({

  container: {
    paddingTop: 45,
    paddingHorizontal: 15,
  },
  mainContainer: {
    flexDirection: "column",
  },
  appoinment: {
    marginTop: 0,
    paddingHorizontal: 0
  },
});
