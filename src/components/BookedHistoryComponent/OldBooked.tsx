import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '~utils'
import { LocationIcon } from '~assets/icons'

interface Props {
  image?: any,
  name?: string,
  location?: string,
  time?: string,
  price?: string,
}

interface OldBookedProps {
  onPress: () => void
}

export const OldBooked: React.FC<OldBookedProps> = ({ onPress }) => {

  const bookerData: Props[] = [
    {
      image: require("./../../assets/images/bookedSplash.png"),
      name: "The Face Factory",
      location: "Uchtepa, Mahorat - 23",
      time: "10:00 - 23:00",
      price: "25.000"
    },
    {
      image: require("./../../assets/images/bookedSplash.png"),
      name: "The Face Factory",
      location: "Uchtepa, Mahorat - 23",
      time: "10:00 - 23:00",
      price: "25.000"
    },
    {
      image: require("./../../assets/images/bookedSplash.png"),
      name: "The Face Factory",
      location: "Uchtepa, Mahorat - 23",
      time: "10:00 - 23:00",
      price: "25.000"
    },
  ]

  const renderBookedData = ({ item }: { item: Props }) => (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={onPress} >
      <Image source={item.image} style={styles.image} />
      <View style={styles.titleBox}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.location}>
          <LocationIcon />
          <Text style={styles.locationTitle}>{item.location}</Text>
        </View>
      </View>
      <View style={styles.timePrice}>
        <Text>{item.time}</Text>
        <Text style={styles.name}>{item.price} uzs</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <>
      <FlatList
        data={bookerData}
        renderItem={renderBookedData}
        contentContainerStyle={styles.flatList}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: colors.white,
    shadowColor: colors.appBlack,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    paddingLeft: 20,
    paddingVertical: 15,
    gap: 15,
    marginBottom: 12
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  titleBox: {
    gap: 10
  },
  name: {
    fontWeight: "600",
    fontSize: 18
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5
  },
  locationTitle: {
    fontWeight: "400",
    fontSize: 12,
    color: colors.appGray
  },
  timePrice: {
    gap: 10,
    alignItems: "flex-end"
  },
  flatList: {
    paddingVertical: 5
  }
})