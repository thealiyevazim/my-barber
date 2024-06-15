import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaTemplate } from "~templates";
import {
  AppButton,
  AppInput,
  AppText,
  BottomComponent,
} from "~components";
import * as ImagePicker from "expo-image-picker";
import { colors, windowHeight } from "~utils";
import Modal from "react-native-modal";
import LocationIcon from "~assets/images/location.png";
import RNDateTimePicker from "@react-native-community/datetimepicker";

export const BarberProfileEditForm: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [workTime, setWorkTime] = useState<boolean>(false);
  const [dateDay, setDateDay] = useState(new Date());
  const [showDayPicker, setShowDayPicker] = useState(false);

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day} / ${month} / ${year}`;
  };

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    setShowDayPicker(false);
    if (selectedDate) {
      setDateDay(selectedDate);
    }
  };

  const openWorkTime = () => {
    setWorkTime(true);
  };

  const closeWorkTime = () => {
    setWorkTime(false);
  };

  const openCalendar = () => {
    setShowDayPicker(true);
  };

  return (
    <SafeAreaTemplate isDark goBack>
      <BottomComponent bottomStyles={styles.container}>
        <TouchableOpacity style={styles.imagePickerWrapper} onPress={PickImage}>
          <Image
            style={styles.imagePicker}
            source={{
              uri:
                image ||
                "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
            }}
          />
        </TouchableOpacity>
        <View style={styles.inputWrapper}>
          <AppInput placeholder="Ism" />
          <AppInput placeholder="Familiya" />
          <AppInput placeholder="+998 " keyboardType="number-pad" />
          <AppInput placeholder="E-mail" textContentType="emailAddress" />
          <AppInput placeholder="Ishlash manzili" rightIcon={LocationIcon} />
          <TouchableOpacity onPress={openCalendar}>
            <AppInput
              value={formatDate(dateDay)}
              placeholder="Tug'ilgan sana"
              readOnly
              editable={false}
              pointerEvents="none"
            />
          </TouchableOpacity>
          <Modal
            isVisible={showDayPicker}
            onBackdropPress={() => setShowDayPicker(false)}
            style={styles.modalView}
          >
            <View style={styles.calendar}>
              <RNDateTimePicker
                mode="date"
                value={dateDay}
                display="inline"
                onChange={handleDateChange}
              />
            </View>
          </Modal>
          <TouchableOpacity onPress={openWorkTime}>
            <AppInput
              value={"09 : 00 - 23 : 00"}
              placeholder="Ish vaqti"
              readOnly
              editable={false}
              pointerEvents="none"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <AppButton title="Tasdiqlash" />
        </View>
      </BottomComponent>
      <Modal
        isVisible={workTime}
        onBackdropPress={closeWorkTime}
        style={styles.modalView}
      >
        <View style={styles.modalBox}>
          <AppText style={styles.modalTitle}>Ish vaqtini tanlang</AppText>
          <View style={styles.buttonBox}>
            <View style={styles.selectTimeButton}>
              <AppText>From:</AppText>
              <RNDateTimePicker
                mode="time"
                value={new Date()}
                display="clock"
              />
            </View>
            <View style={styles.selectTimeButton}>
              <AppText>To:</AppText>
              <RNDateTimePicker
                mode="time"
                value={new Date()}
                display="inline"
              />
            </View>
          </View>
          <TouchableOpacity style={styles.modalButton} onPress={closeWorkTime}>
            <AppText semibold style={{ fontSize: 20, color: colors.white }}>
              Tanlash
            </AppText>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    height: windowHeight / 2 + 180,
  },
  imagePickerWrapper: {
    width: 81,
    height: 81,
    position: "absolute",
    alignSelf: "center",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    top: -40,
  },
  imagePicker: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  inputWrapper: {
    marginTop: 40,
  },
  button: {
    marginTop: 20,
  },
  modalView: {
    flex: 1,
  },
  modalBox: {
    paddingVertical: 16,
    width: "100%",
    borderRadius: 8,
    backgroundColor: colors.white,
    flexDirection: "column",
    justifyContent: "center",
  },
  modalTitle: {
    fontWeight: "600",
    fontSize: 18,
    alignSelf: "center",
    marginBottom: 15,
  },
  modalWrapper: {
    backgroundColor: colors.white,
  },
  buttonBox: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 10,
    justifyContent: "space-between",
  },
  selectTimeButton: {
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: colors.appGray,
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  modalButton: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: colors.appBlack,
  },
  calendar: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 20,
  },
});
