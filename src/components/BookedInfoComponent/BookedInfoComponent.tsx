import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { ClockIcon, LocationIcon } from '~assets/icons';
import {
  AppButton,
  AppText,
  BottomComponent,
  GalleryComponent,
  ServicesComponent,
} from '~components';
import { Routes } from '~navigation';
import { useTypedNavigation } from '~shared';
import { useBarbersId } from '~store';
import { colors, windowHeight } from '~utils';

export const BookedInfoComponent: React.FC = () => {
  const { navigate } = useTypedNavigation<'client'>();
  const barbers = useBarbersId();

  const handleNextPage = () => {
    navigate(Routes.bookAppointmentScreen);
  };

  return (
    <BottomComponent bgImage bottomStyles={styles.bottomStyles}>
      <View>
        <AppText semibold style={styles.title}>
          {barbers?.full_name}
        </AppText>
        {/* <View style={styles.wrapperBox}>
          <StarRatingDisplay rating={4} starSize={18} maxStars={5} />
          <AppText style={styles.viewers}>4/5</AppText>
          <AppText style={styles.viewers}>(265 reviews)</AppText>
        </View> */}
        <View style={styles.wrapperBox}>
          <LocationIcon />
          <AppText style={styles.location}>{barbers?.location || ''}</AppText>
        </View>
        <View style={styles.wrapperBox}>
          <ClockIcon />
          <AppText style={styles.location}>
            Ish vaqti: {barbers?.working_hours || ''}
          </AppText>
        </View>
        <View style={styles.line} />
        <AppText style={styles.itemTitle}>Services</AppText>
        <FlatList
          data={barbers?.services}
          renderItem={({ item }) => <ServicesComponent title={item.name} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.serviceWrapper}
        />
        <AppText style={styles.itemTitle}>Gallery</AppText>
        <GalleryComponent
          gallery={barbers?.images}
          number={
            barbers?.images.length
              ? barbers.images.length.toString()
              : undefined
          }
        />
        <AppButton
          onPress={handleNextPage}
          style={styles.button}
          title="Next"
        />
      </View>
    </BottomComponent>
  );
};

const styles = StyleSheet.create({
  bottomStyles: {
    height: windowHeight / 2 + 230,
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
    fontWeight: '600',
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
