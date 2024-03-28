import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StarIcon from '~assets/icons/StartIcon'
import LocationIcon from '~assets/icons/LocationIcon'
import ClockTimer from '~assets/icons/ClockTimer'
import { palette } from '~utils/theme'

const FaceFactoryComponent = () => {

  const numberOfStars = 5;

  return (
    <View style={styles.topCard}>
      <Text style={styles.bigTitle}>The Face Factory</Text>
      <View style={styles.reviewBox}>
        <View style={styles.starBox}>
          {[...Array(numberOfStars)].map((_, index) => (
            <StarIcon key={index} />
          ))}
        </View>
        <View style={styles.ratioBox}>
          <Text style={styles.ratioText}>5/5</Text>
          <Text style={styles.reviewStyle}>(265 reviews)</Text>
        </View>
      </View>
      <View style={styles.locationBox}>
        <LocationIcon />
        <Text style={styles.addressText}>Uchtepa tumani, Mahorat 23</Text>
      </View>
      <View style={styles.timeBox}>
        <ClockTimer />
        <Text style={styles.timesStyle}>10:00 - 23:00</Text>
      </View>
    </View>
  )
}

export default FaceFactoryComponent

const styles = StyleSheet.create({
  topCard: {
    flexDirection: "column",
    alignItems: "flex-start",
    borderBottomWidth: 1,
    borderColor: palette.totalGray,
    gap: 5,
    paddingBottom: 25,
  },
  bigTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: palette.mainBlack,
  },
  reviewBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  starBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratioBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  reviewStyle: {
    color: palette.totalGray,
  },
  ratioText: {
    fontSize: 12,
    color: palette.mainBlack,
    fontWeight: "400",
  },
  locationBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  addressText: {
    color: palette.totalGray,
    fontSize: 12,
    fontWeight: "400",
  },
  timeBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  timesStyle: {
    color: palette.totalGray,
    fontSize: 10,
    fontWeight: "400",
  },
})