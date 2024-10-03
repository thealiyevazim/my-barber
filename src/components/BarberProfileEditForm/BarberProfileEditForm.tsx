import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import React, { useCallback, useState, useEffect } from 'react';
import { SafeAreaTemplate } from '~templates';
import {
  AppButton,
  AppInput,
  AppText,
  BottomComponent,
  SelectTime,
} from '~components';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { colors, windowHeight } from '~utils';
import LocationIcon from '~assets/images/location.png';
import {
  barberGetMeData,
  barberUpdate,
  useAppDispatch,
  logout,
  useBarberGetMe,
  clientGetMeData,
} from '~store';
import { Formik } from 'formik';
import { BarberUpdateData, useTypedNavigation, useUserType } from '~shared';
import { object, string } from 'yup';
import Modal from 'react-native-modal';
import MapView, { Marker } from 'react-native-maps';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { UserTypesEnum } from '~enums';

const validationSchema = object().shape({
  full_name: string().required('Enter a full name'),
  phone: string().required('Enter a phone'),
  location: string().required('Enter a location'),
  working_hours: string().required('Enter working hours'),
  birth_date: string().required('Enter a birth date'),
});

export const BarberProfileEditForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [image, setImage] = useState<string | null>(null);
  const [openLocation, setOpenLocation] = useState(false);
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null,
  );
  const [address, setAddress] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [openHour, setOpenHour] = useState(false);
  const [selectFromTime, setSelectFromTime] = useState<string>('');
  const [selectToTime, setSelectToTime] = useState<string>('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const barberData = useBarberGetMe();
  const { goBack } = useTypedNavigation();

  const userType = useUserType();

  const generateTimeData = () => {
    const times = [];
    for (let i = 0; i < 24; i++) {
      const label = i.toString().padStart(2, '0') + ':00';
      times.push({ label, value: label });
    }
    return times;
  };

  const timeData = generateTimeData();

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  useEffect(() => {
    dispatch(barberGetMeData());
  }, [dispatch]);

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

  const getAddressFromCoordinates = async (
    latitude: number,
    longitude: number,
  ) => {
    try {
      const [result] = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      if (result) {
        return `${result.street}, ${result.city}, ${result.country}`;
      }
      return 'Unknown address';
    } catch (error) {
      console.error(error);
      return 'Error fetching address';
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

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (
    date: Date,
    setFieldValue: (field: string, value: any) => void,
  ) => {
    const formattedDate = moment(date).format('DD.MM.YYYY');
    setFieldValue('birth_date', formattedDate);
    hideDatePicker();
  };

  const handleMyLocationPress = async (handleChange: any) => {
    if (location) {
      const address = await getAddressFromCoordinates(
        location.coords.latitude,
        location.coords.longitude,
      );
      setAddress(address);
      handleChange('location')(address);
      setOpenLocation(false);
    }
  };

  const handleSubmitForm = useCallback(
    async (data: BarberUpdateData) => {
      await dispatch(barberUpdate(data));
      handleGoBack();
      if (userType === UserTypesEnum.Barber) {
        dispatch(barberGetMeData());
      } else {
        dispatch(clientGetMeData());
      }
    },
    [dispatch, handleGoBack],
  );

  const myLocationNow = {
    latitude: 41.217605339975904,
    longitude: 69.1896892361171,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const myLocation = () => (
    <View style={styles.myLocation}>
      <View style={styles.location}></View>
    </View>
  );

  return (
    <SafeAreaTemplate isDark goBack>
      <Formik
        initialValues={{
          full_name: barberData?.full_name,
          phone: barberData?.phone,
          location: barberData?.location,
          working_hours: barberData?.working_hours,
          birth_date: barberData?.birth_date,
        }}
        onSubmit={handleSubmitForm}
        validationSchema={validationSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
        }) => (
          <BottomComponent bottomStyles={styles.container}>
            <TouchableOpacity
              style={styles.imagePickerWrapper}
              onPress={PickImage}>
              <Image
                style={styles.imagePicker}
                source={{
                  uri:
                    image ||
                    'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
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
                  value={address || values.location}
                  onChangeText={handleChange('location')}
                  onBlur={handleBlur('location')}
                  readOnly
                  editable={false}
                  pointerEvents="none"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={showDatePicker}>
                <AppInput
                  value={values.birth_date}
                  placeholder="Birthday date"
                  readOnly
                  editable={false}
                  pointerEvents="none"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setOpenHour(true)}>
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
              style={styles.modalView}>
              <View style={styles.containerLocation}>
                {location ? (
                  <MapView style={styles.map} initialRegion={myLocationNow}>
                    <Marker coordinate={myLocationNow} />
                    <Marker
                      coordinate={{
                        latitude: myLocationNow.latitude,
                        longitude: myLocationNow.longitude,
                      }}>
                      {myLocation()}
                    </Marker>
                  </MapView>
                ) : (
                  <Text style={styles.paragraph}>Loading...</Text>
                )}
                <AppButton
                  title="My location"
                  onPress={() => handleMyLocationPress(handleChange)}
                />
              </View>
            </Modal>
            <Modal
              isVisible={openHour}
              onBackdropPress={() => setOpenHour(false)}
              style={styles.modalView}>
              <View
                style={{
                  backgroundColor: colors.lightGray,
                  alignItems: 'center',
                  padding: 20,
                  borderRadius: 8,
                }}>
                <View style={styles.workHourDiv}>
                  <View style={styles.timeWrapper}>
                    <AppText>From:</AppText>
                    <SelectTime
                      style={{ width: 120 }}
                      selectTime={selectFromTime}
                      setSelectTime={setSelectFromTime}
                      data={timeData}
                      selectedTextStyle={{ fontSize: 14 }}
                      placeholderStyle={{ fontSize: 14 }}
                    />
                  </View>
                  <View style={styles.timeWrapper}>
                    <AppText>To:</AppText>
                    <SelectTime
                      style={{ width: 120 }}
                      selectTime={selectToTime}
                      setSelectTime={setSelectToTime}
                      data={timeData}
                      selectedTextStyle={{ fontSize: 14 }}
                      placeholderStyle={{ fontSize: 14 }}
                    />
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.modalButtonTime}
                  onPress={() => setOpenHour(false)}>
                  <AppText style={{ color: colors.white }}>OK</AppText>
                </TouchableOpacity>
              </View>
            </Modal>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={date => handleConfirm(date, setFieldValue)}
              onCancel={hideDatePicker}
            />
          </BottomComponent>
        )}
      </Formik>
    </SafeAreaTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height:
      Platform.OS === 'ios' ? windowHeight / 2 + 100 : windowHeight / 2 + 150,
  },
  imagePickerWrapper: {
    width: 81,
    height: 81,
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLocation: {
    backgroundColor: colors.white,
    width: 350,
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
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
    marginBottom: 20,
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
  },
  workHourDiv: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  timeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalButtonTime: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: colors.appBlack,
    borderRadius: 8,
    marginTop: 20,
  },
});
