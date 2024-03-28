import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ServiceComponent } from "~components/ServiceComponent";
import { BooKDataModal, CounterPeopleComponent, CustomTimePicker, HeaderTitleArrow, NextButton, TitleComponent } from "~components";
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
        <SafeAreaView style={styles.mainContainer}>
          <HeaderTitleArrow title="Bron qilish" onPress={goBack} style={styles.appoinment} />
          <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll} >
            <TitleComponent title='Kunni tanlang' size />
            <CustomDatePicker selectDate={selectDate} onSelectDate={handleSelectDate} />
            <TitleComponent title='Vaqtni tanlang' size height />
            <CustomTimePicker />
            <TitleComponent title='Service' size height />
            <ServiceComponent />
            <TitleComponent title='Necha kishi?' size height />
            <CounterPeopleComponent />
            <View style={styles.nextButton}>
              <NextButton btnTitle="Next" handleClick={openModal} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
      <BooKDataModal isVisible={modalVisible} onPress={closeModal} handleSubmit={closeModal} />
    </>
  );
};

export default BookingBarber;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 55 : 45,
    paddingHorizontal: 15,
  },
  mainContainer: {
    height: '100%',
  },
  appoinment: {
    marginTop: 0,
    paddingHorizontal: 0
  },
  scroll: {

  },
  nextButton: {
    height: "15%",
    justifyContent: "flex-end",
    marginTop: Platform.OS === "ios" ? 50 : 0,
    paddingBottom: 30
  }
});
