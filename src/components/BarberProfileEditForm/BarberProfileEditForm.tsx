import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaTemplate } from '~templates'
import { AppButton, AppInput, BottomComponent } from '~components'
import * as ImagePicker from 'expo-image-picker';
import { windowHeight } from '~utils';
import LocationIcon from "~assets/images/location.png";

export const BarberProfileEditForm: React.FC = () => {

  const [image, setImage] = useState<string | null>(null);

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
          <AppInput
            placeholder="Ish vaqti"
          />
        </View>
        <View style={styles.button}>
          <AppButton
            title="Tasdiqlash"
          />
        </View>
      </BottomComponent>
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
  }
})