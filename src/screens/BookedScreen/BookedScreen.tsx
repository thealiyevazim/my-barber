import { FlatList, Image, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaTemplate } from '~templates'
import { AppButton, AppText, BottomComponent, GalleryComponent, ServicesComponent } from '~components'
import BookedSplash from "~assets/images/bookedSplash.png";
import { colors, windowHeight } from '~utils';
import { ClockIcon, LocationIcon } from '~assets/icons';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { useTypedNavigation } from '~shared';
import { Routes } from '~navigation';

const serviceData = [
  {
    id: 0,
    title: "Haircut",
  },
  {
    id: 1,
    title: "Shaving",
  },
  {
    id: 2,
    title: "Styling",
  },
  {
    id: 3,
    title: "Hairdryer",
  },
  {
    id: 4,
    title: "Coloring",
  }
]

export const BookedScreen: React.FC = () => {
  const { navigate } = useTypedNavigation<"client">();

  const handleNextPage = () => {
    navigate(Routes.bookAppointmentScreen)
  }

  return (
    <SafeAreaTemplate isDark goBack>
      <Image source={BookedSplash} style={styles.splash} />
      <BottomComponent bgImage bottomStyles={styles.bottomStyles}>
        <View>
          <AppText semibold style={styles.title}>
            The Face Factory
          </AppText>
          <View style={styles.wrapperBox}>
            <StarRatingDisplay
              rating={4}
              starSize={18}
              maxStars={5}
            />
            <AppText style={styles.viewers}>4/5</AppText>
            <AppText style={styles.viewers}>(265 reviews)</AppText>
          </View>
          <View style={styles.wrapperBox}>
            <LocationIcon />
            <AppText style={styles.location}>
              Uchtepa tumani, Mahorat 23
            </AppText>
          </View>
          <View style={styles.wrapperBox}>
            <ClockIcon />
            <AppText style={styles.location}>
              10:00 - 23:00
            </AppText>
          </View>
          <View style={styles.line} />
          <AppText style={styles.itemTitle}>
            Services
          </AppText>
          <FlatList
            data={serviceData}
            renderItem={({ item, index }) => (<ServicesComponent title={item.title} />)}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.serviceWrapper}
          />
          <AppText style={styles.itemTitle}>
            Gallery
          </AppText>
          <GalleryComponent />
          <AppButton onPress={handleNextPage} style={styles.button} title='Next' />
        </View>
      </BottomComponent>
    </SafeAreaTemplate>
  )
}

const styles = StyleSheet.create({
  splash: {
    position: "absolute",
    width: "120%",
    zIndex: -1
  },
  bottomStyles: {
    height: Platform.OS === "ios" ? windowHeight / 2 + 230 : windowHeight / 2 + 320,
    paddingVertical: 20
  },
  title: {
    fontWeight: "700",
    fontSize: 25,
  },
  wrapperBox: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: "center",
  },
  viewers: {
    color: colors.iconGray,
    marginLeft: 5
  },
  location: {
    color: colors.iconGray,
    marginLeft: 5
  },
  line: {
    borderWidth: 1,
    borderColor: colors.iconGray,
    marginVertical: 20
  },
  itemTitle: {
    fontWeight: 600,
    fontSize: 20
  },
  serviceWrapper: {
    marginTop: 15,
    marginBottom: 20,
  },
  button: {
    marginTop: 20
  }
})