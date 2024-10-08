import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { AppText } from '../AppText/AppText';
import { BottomComponent } from '../BottomComponent/BottomComponent';
import { ProfileCarousel } from '../ProfileCarousel/ProfileCarousel';
import { SafeAreaTemplate } from '~templates';
import { colors, windowHeight } from '~utils';
import {
  ArrowLeftIcon,
  EditIcon,
  LanguageIcon,
  LogOutIcon,
  ServiceIcon,
} from '~assets/icons';
import Modal from 'react-native-modal';
import { useTypedNavigation, useUserType } from '~shared';
import { UserTypesEnum } from '~enums';
import { Routes } from '~navigation';
import { useAppDispatch, useBarberGetMeImages } from '~store';

const carouselMockData = [
  {
    id: 1,
    url: 'https://bondsbarbershop.co.uk/images/home-hero.jpg',
  },
  {
    id: 2,
    url: 'https://nationaltoday.com/wp-content/uploads/2022/02/Barbers-Day-1200x834.jpg',
  },
];

interface ProfileComponentProps {
  name?: string;
  customerNumber?: string;
  logOutPress?: () => void;
  goEditPress?: () => void;
  goToLanguage?: () => void;
}

export const ProfileComponent: React.FC<ProfileComponentProps> = ({
  name,
  logOutPress,
  goEditPress,
  goToLanguage,
}) => {
  const [openLogOut, setOpenLogOut] = useState<boolean>(false);
  const userType = useUserType();
  const { navigate } = useTypedNavigation<'barber'>();
  const images = useBarberGetMeImages();
  const dispatch = useAppDispatch();

  const handleService = useCallback(() => {
    navigate(Routes.barberSelectService);
  }, []);

  return (
    <SafeAreaTemplate isDark>
      <View>
        <ProfileCarousel />
        <Pressable style={styles.editButton} onPress={goEditPress}>
          <EditIcon />
        </Pressable>
        <View style={styles.accountWrapper}>
          <AppText style={styles.name}>{name}</AppText>
        </View>
      </View>
      <BottomComponent bottomStyles={styles.container} bgImage={true}>
        <View style={styles.settingsWrapper}>
          <TouchableOpacity style={styles.buttonWrapper} onPress={goToLanguage}>
            <View style={styles.iconWrapper}>
              <LanguageIcon />
              <AppText style={styles.buttonTitle}>Language</AppText>
            </View>
            <View style={styles.iconWrapper}>
              <AppText style={styles.value}>English</AppText>
              <ArrowLeftIcon stroke={colors.appBlack} />
            </View>
          </TouchableOpacity>
          {userType === UserTypesEnum.Barber ? (
            <>
              <TouchableOpacity
                style={styles.buttonWrapper}
                onPress={handleService}>
                <View style={styles.iconWrapper}>
                  <ServiceIcon />
                  <AppText style={styles.buttonTitle}>Service</AppText>
                </View>
                <View style={styles.iconWrapper}>
                  <ArrowLeftIcon stroke={colors.appBlack} />
                </View>
              </TouchableOpacity>
              {/* <TouchableOpacity style={styles.buttonWrapper}>
                  <View style={styles.iconWrapper}>
                    <HistoryIcon />
                    <AppText style={styles.buttonTitle}>
                      History
                    </AppText>
                  </View>
                  <View style={styles.iconWrapper}>
                    <ArrowLeftIcon stroke={colors.appBlack} />
                  </View>
                </TouchableOpacity> */}
            </>
          ) : null}
          <TouchableOpacity
            style={styles.logOutWrapper}
            onPress={() => setOpenLogOut(true)}>
            <LogOutIcon />
            <AppText style={styles.buttonTitle}>Log out</AppText>
          </TouchableOpacity>
        </View>
      </BottomComponent>
      <Modal
        isVisible={openLogOut}
        onBackdropPress={() => setOpenLogOut(false)}
        style={styles.modalView}>
        <View style={styles.modalBox}>
          <AppText style={styles.modalTitle}>Ilovadan chiqish</AppText>
          <AppText style={styles.description}>
            Barbershop ilovasidan chiqishga ishonchingiz komilmi?
          </AppText>
          <View style={styles.buttonBox}>
            <TouchableOpacity
              style={styles.noButton}
              onPress={() => setOpenLogOut(false)}>
              <AppText style={{ color: colors.white }}>Yo'q</AppText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.yesButton} onPress={logOutPress}>
              <AppText style={{ color: colors.white }}>Ha</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    bottom: '-10%',
    height:
      Platform.OS === 'ios' ? windowHeight / 2 - 10 : windowHeight / 2 + 90,
  },
  accountWrapper: {
    position: 'absolute',
    bottom: 20,
    zIndex: 2,
  },
  name: {
    color: colors.white,
    fontSize: 25,
    marginTop: 10,
  },
  customerNumber: {
    color: colors.white,
    fontSize: 16,
    marginTop: 6,
  },
  editButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    position: 'absolute',
    top: 30,
    right: 0,
  },
  settingsWrapper: {
    rowGap: 24,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 20,
    marginLeft: 12,
  },
  value: {
    fontSize: 14,
    color: colors.iconGray,
    marginRight: 12,
  },
  logOutWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '35%',
  },
  modalBox: {
    paddingVertical: 20,
    width: '100%',
    borderRadius: 8,
    backgroundColor: colors.white,
    flexDirection: 'column',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  modalTitle: {
    fontWeight: '600',
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 15,
  },
  description: {
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: '400',
    color: colors.appGray,
    width: 250,
  },
  buttonBox: {
    flexDirection: 'row',
    paddingHorizontal: 60,
    marginTop: 40,
    justifyContent: 'space-between',
  },
  noButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: colors.appGray,
  },
  yesButton: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: colors.appBlack,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
