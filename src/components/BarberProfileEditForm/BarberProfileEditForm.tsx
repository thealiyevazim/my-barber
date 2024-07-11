import { Image, Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import { SafeAreaTemplate } from "~templates";
import { AppButton, AppInput, BottomComponent } from "~components";
import * as ImagePicker from "expo-image-picker";
import { colors, windowHeight } from "~utils";
import LocationIcon from "~assets/images/location.png";
import { barberUpdate, useAppDispatch, useBarberData } from "~store";
import { Formik } from "formik";
import { BarberUpdateData } from "~shared";
import { object, string } from "yup";

const validationSchema = object().shape({
  full_name: string().required("Enter an full name"),
  phone: string().required("Enter a phone"),
  location: string().required("Enter a location"),
  working_hours: string().required("Enter a working hours"),
  birth_date: string().required("Enter a birth date"),
});

export const BarberProfileEditForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [image, setImage] = useState<string | null>(null);
  const barberData = useBarberData()

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
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmitForm = useCallback((data: BarberUpdateData) => {
    dispatch(barberUpdate(data));
  }, [dispatch]);

  return (
    <SafeAreaTemplate isDark goBack>
      <Formik
        initialValues={{
          full_name: barberData.full_name,
          phone: barberData.phone,
          location: barberData.location,
          working_hours: barberData.working_hours,
          birth_date: barberData.birth_date
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
              <AppInput
                placeholder="Location"
                rightIcon={LocationIcon}
                value={values.location}
                onChangeText={handleChange('location')}
                onBlur={handleBlur('location')}
              />
              <TouchableOpacity >
                <AppInput
                  value={values.birth_date}
                  placeholder="Birthday date"
                  readOnly
                  editable={false}
                  onChangeText={handleChange('birth_date')}
                  pointerEvents="none"
                  onBlur={handleBlur('birth_date')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AppInput
                  value={values.working_hours}
                  placeholder="Working hour"
                  readOnly
                  editable={false}
                  pointerEvents="none"
                  onChangeText={handleChange('working_hours')}
                  onBlur={handleBlur('working_hours')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <AppButton title="Tasdiqlash" onPress={handleSubmit} />
            </View>
          </BottomComponent>
        )}
      </Formik>
    </SafeAreaTemplate>
  );
};

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
  calendar: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 20,
  },
});
