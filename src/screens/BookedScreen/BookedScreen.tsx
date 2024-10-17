import React from 'react';
import { FlatList, Image, Platform, StyleSheet, View } from 'react-native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { ClockIcon, LocationIcon } from '~assets/icons';
import BookedSplash from '~assets/images/bookedSplash.png';
import {
  AppButton,
  AppText,
  BottomComponent,
  GalleryComponent,
  ServicesComponent,
} from '~components';
import { Routes } from '~navigation';
import { Barber, useTypedNavigation } from '~shared';
import { SafeAreaTemplate } from '~templates';
import { colors, windowHeight } from '~utils';

const serviceData = [
  {
    id: 0,
    title: 'Soch olish',
  },
  {
    id: 1,
    title: 'Soqol olish',
  },
  {
    id: 2,
    title: 'Turmaklash',
  },
  {
    id: 3,
    title: 'Soch quritish',
  },
  {
    id: 4,
    title: 'Bo`yash',
  },
];

type Props = {
  barber: Barber;
};

export const BookedScreen: React.FC = () => {
  const { navigate } = useTypedNavigation<'client'>();

  const handleNextPage = () => {
    navigate(Routes.bookAppointmentScreen);
  };

  return (
    <SafeAreaTemplate isDark goBack>
      <Image source={BookedSplash} style={styles.splash} />
      <BottomComponent bgImage bottomStyles={styles.bottomStyles}>
        <View>
          <AppText semibold style={styles.title}>
            {/* {barber.full_name} */}
          </AppText>
          <View style={styles.wrapperBox}>
            <StarRatingDisplay rating={4} starSize={18} maxStars={5} />
            <AppText style={styles.viewers}>4/5</AppText>
            <AppText style={styles.viewers}>(265 marotaba ko'rilgan)</AppText>
          </View>
          <View style={styles.wrapperBox}>
            <LocationIcon />
            {/* <AppText style={styles.location}>{barber.location}</AppText> */}
          </View>
          <View style={styles.wrapperBox}>
            <ClockIcon />
            {/* <AppText style={styles.location}>{barber.working_hours}</AppText> */}
          </View>
          <View style={styles.line} />
          <AppText style={styles.itemTitle}>Services</AppText>
          <FlatList
            data={serviceData}
            renderItem={({ item, index }) => (
              <ServicesComponent title={item.title} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.serviceWrapper}
          />
          <AppText style={styles.itemTitle}>Rasmlar galereyasi</AppText>
          <GalleryComponent />
          <AppButton
            onPress={handleNextPage}
            style={styles.button}
            title="Keyingisi"
          />
        </View>
      </BottomComponent>
    </SafeAreaTemplate>
  );
};

const styles = StyleSheet.create({
  splash: {
    position: 'absolute',
    width: '120%',
    zIndex: -1,
  },
  bottomStyles: {
    height:
      Platform.OS === 'ios' ? windowHeight / 2 + 230 : windowHeight / 2 + 320,
    paddingVertical: 20,
  },
  title: {
    fontWeight: '700',
    fontSize: 25,
  },
  wrapperBox: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  viewers: {
    color: colors.iconGray,
    marginLeft: 5,
  },
  location: {
    color: colors.iconGray,
    marginLeft: 5,
  },
  line: {
    borderWidth: 1,
    borderColor: colors.iconGray,
    marginVertical: 20,
  },
  itemTitle: {
    fontWeight: 600,
    fontSize: 20,
  },
  serviceWrapper: {
    marginTop: 15,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});
