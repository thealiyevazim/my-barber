import { Formik } from 'formik';
import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { object, string } from 'yup';
import { AppButton, AppInput, BottomComponent } from '~components';
import { UserTypesEnum } from '~enums';
import {
  BarberLoginData,
  ClientLoginData,
  currentUserForLogin,
  useUserType,
} from '~shared';
import {
  barberLogin,
  clientLogin,
  useAppDispatch,
  useAppSelector,
} from '~store';
import { SafeAreaTemplate } from '~templates';
import { sleep } from '~utils';

const validationSchema = object().shape({
  username: string().required('Enter an username'),
  password: string().required('Enter a password'),
});

export const LoginScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(
    store => store.barberLogin.loading || store.clientLogin.loading,
  );
  const userType = useUserType();

  const [loading, setLoading] = useState(isLoading);

  const handleNextPage = useCallback(() => {}, []);

  const handleSubmitForm = useCallback(
    async (data: BarberLoginData | ClientLoginData) => {
      setLoading(true);
      await sleep(2000);
      if (userType === UserTypesEnum.Barber) {
        dispatch(barberLogin(data as BarberLoginData));
      } else {
        dispatch(clientLogin(data as ClientLoginData));
      }

      setLoading(false);
    },
    [dispatch, userType],
  );

  return (
    <SafeAreaTemplate isDark>
      <BottomComponent bottomStyles={styles.container}>
        <Formik
          initialValues={
            currentUserForLogin ?? {
              password: '',
              username: '',
            }
          }
          onSubmit={handleSubmitForm}
          validationSchema={validationSchema}>
          {({ handleBlur, handleChange, handleSubmit, values }) => (
            <>
              <View>
                <AppInput
                  value={values.username.trim()}
                  style={styles.input}
                  placeholder="Login"
                  textContentType="username"
                  onBlur={handleBlur('username')}
                  onChangeText={handleChange('username')}
                />
                <AppInput
                  value={values.password.trim()}
                  style={styles.input}
                  isSecure
                  placeholder="Password"
                  textContentType="password"
                  onBlur={handleBlur('password')}
                  onChangeText={handleChange('password')}
                />
              </View>
              <View>
                <AppButton
                  title="Tizimga kirish"
                  onPress={handleSubmit}
                  isLoading={loading}
                />
                <AppButton title="Ro'yxatdan o'tish" onPress={handleNextPage} />
              </View>
            </>
          )}
        </Formik>
      </BottomComponent>
    </SafeAreaTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  input: {
    marginBottom: 15,
  },
});
