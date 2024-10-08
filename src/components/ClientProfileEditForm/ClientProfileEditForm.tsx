import * as ImagePicker from 'expo-image-picker';
import { Formik } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { object, string } from 'yup';
import { AppButton, AppInput, BottomComponent } from '~components';
import { ClientUpdateData, useTypedNavigation } from '~shared';
import {
  clientAvatarUpdate,
  clientGetMeData,
  clientUpdate,
  useAppDispatch,
  useClientAvatarUpdateLoading,
  useClientGetMe,
  useClientUpdateDataLoading,
} from '~store';
import { SafeAreaTemplate } from '~templates';
import { windowHeight } from '~utils';

const validationSchema = object().shape({
  full_name: string().required('Enter an full name'),
  phone: string().required('Enter a phone'),
});

export const ClientProfileEditForm: React.FC = () => {
  const clientData = useClientGetMe();
  const cliendDataLoading = useClientUpdateDataLoading();
  const clientAvatarLoading = useClientAvatarUpdateLoading();

  console.log(clientAvatarLoading);

  const dispatch = useAppDispatch();
  const { goBack } = useTypedNavigation();

  const [profileImage, setProfileImage] = useState<string>(clientData.avatar);

  useEffect(() => {
    const requestPermission = async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    };
    requestPermission();
  }, []);

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
    if (profileImage) {
      dispatch(clientAvatarUpdate({ avatar: profileImage }));
    }
  };

  const handleSubmitForm = useCallback(
    (data: ClientUpdateData) => {
      dispatch(clientUpdate(data)).then(() => {
        dispatch(clientGetMeData());
        goBack();
      });
    },
    [dispatch],
  );

  return (
    <SafeAreaTemplate isDark goBack>
      <Formik
        initialValues={{
          full_name: clientData?.full_name,
          phone: clientData?.phone,
        }}
        onSubmit={handleSubmitForm}
        validationSchema={validationSchema}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <BottomComponent bottomStyles={styles.container}>
            <TouchableOpacity
              style={styles.imagePickerWrapper}
              onPress={handlePickImage}>
              {clientAvatarLoading ? (
                <ActivityIndicator size={'small'} />
              ) : (
                <Image
                  style={styles.imagePicker}
                  source={{
                    uri: profileImage,
                  }}
                />
              )}
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
              <AppButton
                title="Tasdiqlash"
                onPress={handleSubmit}
                isLoading={cliendDataLoading}
              />
            </View>
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
});
