import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaTemplate } from '~templates'
import { AppButton, AppInput, AppText, BottomComponent } from '~components'
import * as ImagePicker from 'expo-image-picker';
import { colors, windowHeight } from '~utils';
import Modal from "react-native-modal";
import LocationIcon from "~assets/images/location.png";
import RNDateTimePicker from '@react-native-community/datetimepicker';

export const BarberProfileEditForm: React.FC = () => {

  const [image, setImage] = useState<string | null>(null);
  const [workTime, setWorkTime] = useState<boolean>(false);
  const [selectTime, setSelectTime] = useState<boolean>(false);

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })
    console.log(result)
    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  const openWorkTime = () => {
    setWorkTime(true)
  }

  const closeWorkTime = () => {
    setWorkTime(false)
  }

  const openSelectTimeModal = () => {
    setSelectTime(true)
  }

  const closeSelectTimeModal = () => {
    setSelectTime(false)
  }

  return (
    <SafeAreaTemplate isDark>
      <BottomComponent bottomStyles={styles.container}>
        <TouchableOpacity style={styles.imagePickerWrapper} onPress={PickImage}>
          <Image
            style={styles.imagePicker}
            source={{ uri: image || "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" }} />
        </TouchableOpacity>
        <View style={styles.inputWrapper}>
          <AppInput
            placeholder="Ism"
          />
          <AppInput
            placeholder="Familiya"
          />
          <AppInput
            placeholder="+998 "
            keyboardType="number-pad"
          />
          <AppInput
            placeholder="E-mail"
            textContentType="emailAddress"
          />
          <AppInput
            placeholder="Ishlash manzili"
            rightIcon={LocationIcon}
          />
          <AppInput
            placeholder="Tug'ilgan sana"
          />
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
          <AppButton
            title="Tasdiqlash"
          />
        </View>
      </BottomComponent>
      <Modal
        isVisible={workTime}
        onBackdropPress={closeWorkTime}
        style={styles.modalView} >
        <View style={styles.modalBox}>
          <AppText style={styles.modalTitle}>
            Ish vaqtini tanlang
          </AppText>
          <View style={styles.buttonBox}>
            <TouchableOpacity style={styles.selectTimeButton} onPress={openSelectTimeModal}>
              <AppText style={styles.timeTitle}>From: 08 : 00</AppText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectTimeButton} onPress={openSelectTimeModal}>
              <AppText style={styles.timeTitle}>To: 24 : 00</AppText>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.modalButton} onPress={closeWorkTime}>
            <AppText semibold style={{ fontSize: 20, color: colors.white }}>
              Tanlash
            </AppText>
          </TouchableOpacity>
        </View>
        <Modal
          isVisible={selectTime}
          onBackdropPress={closeSelectTimeModal}
          style={styles.modalView} >
          <View style={styles.modalBox}>
            <RNDateTimePicker
              mode='time'
              value={new Date()}
              display="spinner" />
            <TouchableOpacity style={styles.modalButton} onPress={closeSelectTimeModal}>
              <AppText semibold style={{ fontSize: 20, color: colors.white }}>
                Tanlash
              </AppText>
            </TouchableOpacity>
          </View>
        </Modal>
      </Modal>
    </SafeAreaTemplate>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    height: windowHeight / 2 + 160
  },
  imagePickerWrapper: {
    width: 81,
    height: 81,
    position: "absolute",
    alignSelf: "center",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    top: -40
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    paddingVertical: 16,
    width: "100%",
    borderRadius: 8,
    backgroundColor: colors.white,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  modalTitle: {
    fontWeight: "600",
    fontSize: 18,
    alignSelf: "center",
    marginBottom: 15
  },
  buttonBox: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 10,
    justifyContent: "space-between"
  },
  selectTimeButton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: colors.appGray,
    width: "45%",
    justifyContent: "center",
    alignItems: "center"
  },
  timeTitle: {

  },
  modalButton: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: colors.appBlack
  }
})