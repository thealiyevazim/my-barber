import { Image, Platform, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React, { useCallback, useState, useEffect, useRef } from "react";
import { SafeAreaTemplate } from "~templates";
import { AppButton, AppInput, BottomComponent } from "~components";
import * as ImagePicker from "expo-image-picker";
import * as Location from 'expo-location';
import { colors, windowHeight } from "~utils";
import LocationIcon from "~assets/images/location.png";
import { barberUpdate, useAppDispatch, useBarberData } from "~store";
import { Formik } from "formik";
import { BarberUpdateData } from "~shared";
import { object, string } from "yup";
import Modal from "react-native-modal";
import MapView, { Marker } from 'react-native-maps';

const validationSchema = object().shape({
  full_name: string().required("Enter a full name"),
  phone: string().required("Enter a phone"),
  location: string().required("Enter a location"),
  working_hours: string().required("Enter working hours"),
  birth_date: string().required("Enter a birth date"),
});

export const BarberProfileEditForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [image, setImage] = useState<string | null>(null);
  const barberData = useBarberData();
  const [openLocation, setOpenLocation] = useState(false);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const getAddressFromCoordinates = async (latitude: number, longitude: number) => {
    try {
      const [result] = await Location.reverseGeocodeAsync({ latitude, longitude });
      if (result) {
        return `${result.street}, ${result.city}, ${result.country}`;
      }
      return "Unknown address";
    } catch (error) {
      console.error(error);
      return "Error fetching address";
    }
  };

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

  const handleMyLocationPress = async (handleChange: any) => {
    if (location) {
      const address = await getAddressFromCoordinates(location.coords.latitude, location.coords.longitude);
      setAddress(address);
      handleChange('location')(address);
      setOpenLocation(false);
    }
  };

  const myLocationNow = {
    latitude: 41.217605339975904,
    longitude: 69.1896892361171,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  const myLocation = () => (
    <View style={styles.myLocation}>
      <View style={styles.location}></View>
    </View>
  )

  return (
    <SafeAreaTemplate isDark goBack>
      <Formik
        initialValues={{
          full_name: barberData?.full_name,
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
              <TouchableOpacity onPress={() => setOpenLocation(true)}>
                <AppInput
                  placeholder="Location"
                  rightIcon={LocationIcon}
                  value={address || values.location} // Use address if available, otherwise fallback to Formik value
                  onChangeText={handleChange('location')}
                  onBlur={handleBlur('location')}
                  readOnly
                  editable={false}
                  pointerEvents="none"
                />
              </TouchableOpacity>
              <TouchableOpacity>
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
            <Modal
              isVisible={openLocation}
              onBackdropPress={() => setOpenLocation(false)}
              style={styles.modalView}
            >
              <View style={styles.containerLocation}>
                {location ? (
                  <MapView
                    style={styles.map}
                    initialRegion={myLocationNow}
                  >
                    <Marker
                      coordinate={myLocationNow}
                    />
                    <Marker coordinate={{ latitude: myLocationNow.latitude, longitude: myLocationNow.longitude }}>
                      {myLocation()}
                    </Marker>
                  </MapView>
                ) : (
                  <Text style={styles.paragraph}>Loading...</Text>
                )}
                <AppButton title="My location" onPress={() => handleMyLocationPress(handleChange)} />
              </View>
            </Modal>
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
  modalView: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  containerLocation: {
    backgroundColor: colors.white,
    width: 350,
    borderRadius: 20,
    justifyContent: "space-between",
    alignItems: "center"
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
  map: {
    width: '100%',
    height: 500,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginBottom: 20
  },
  myLocation: {
    width: 20,
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 5,
  },
  location: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: 'red',
  }
});
