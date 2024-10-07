import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import LogoIcon from '~assets/images/onboarding-logo.png';
import { AppButton, AppText, RolePicker } from '~components';
import { UserTypesEnum } from '~enums';
import { Routes } from '~navigation';
import { useTypedNavigation, useUserType } from '~shared';
import { useAppDispatch } from '~store';
import { SafeAreaTemplate } from '~templates';
import { colors } from '~utils';

export const SelectRoleScreen: React.FC = () => {
  const userType = useUserType();
  const dispatch = useAppDispatch();
  const { navigate } = useTypedNavigation<'public'>();

  const handleNavigate = useCallback(async () => {
    navigate(Routes.loginScreen);
  }, []);

  return (
    <SafeAreaTemplate>
      <View style={styles.container}>
        <Image source={LogoIcon} />
        <View style={styles.textView}>
          <AppText style={styles.title} semibold>
            Hush kelibsiz!
          </AppText>
          <AppText style={styles.description}>
            Kim bo’lib davom etishingizni tanlang.
          </AppText>
        </View>
        <RolePicker />
      </View>
      <AppButton title={'Davom etish'} onPress={handleNavigate} />
    </SafeAreaTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView: {
    marginVertical: '10%',
  },
  title: {
    fontSize: 42,
    color: colors.appBlack,
    alignSelf: 'flex-start',
  },
  description: {
    fontSize: 20,
    color: colors.appBlack,
    alignSelf: 'flex-start',
  },
});
