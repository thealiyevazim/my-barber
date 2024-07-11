import { Image, Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaTemplate } from '~templates'
import { AppButton, AppInput, BottomComponent } from '~components'
import * as ImagePicker from 'expo-image-picker';
import { windowHeight } from '~utils';
import { Formik } from "formik";
import { object, string } from 'yup';
import { clientUpdate, useAppDispatch, useClientData } from '~store';
import { ClientUpdateData } from '~shared';

const validationSchema = object().shape({
  full_name: string().required("Enter an full name"),
  phone: string().required("Enter a phone"),
});

export const ClientProfileEditForm: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const clientData = useClientData();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const requestPermission = async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    };
    requestPermission();
  }, []);

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

  const handleSubmitForm = useCallback((data: ClientUpdateData) => {
    dispatch(clientUpdate(data));
  }, [dispatch]);

  return (
    <SafeAreaTemplate isDark goBack>
      <Formik
        initialValues={{
          full_name: clientData.full_name,
          phone: clientData.phone,
        }}
        onSubmit={handleSubmitForm}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
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
              <AppInput
                placeholder="Full Name"
                value={values.full_name}
                onChangeText={handleChange('full_name')}
                onBlur={handleBlur('full_name')}
              />
              <AppInput
                placeholder="Phone number"
                keyboardType="number-pad"
                value={values.phone}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
              />
            </View>
            <View style={styles.button}>
              <AppButton title="Tasdiqlash" onPress={handleSubmit} />
            </View>
          </BottomComponent>
        )}
      </Formik>
    </SafeAreaTemplate>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    height: Platform.OS === "ios" ? windowHeight / 2 + 100 : windowHeight / 2 + 150,
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