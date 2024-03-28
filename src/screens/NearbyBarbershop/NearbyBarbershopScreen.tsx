import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Platform, Dimensions } from "react-native";
import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";

import LocationIcon from "~assets/icons/LocationIcon";
import DoteIcon from "~assets/icons/DoteIcon";
import { palette } from "~utils/theme";
import { AuthenticationRouteList } from "~navigation";
import { HeaderTitleArrow } from "~components";

const { width: SCREEN_WIDTH } = Dimensions.get('window')
export const CATALOG_CARD_WIDTH = Platform.OS === 'ios' ? 175 : 165
const COLUMN_GAP = (SCREEN_WIDTH - (CATALOG_CARD_WIDTH * 2) - 20) / 2

interface Props {
  imageSource: any,
  isWork: boolean,
  time: string,
  title: string,
  distance: string,
  ratio: string,
  handleClick?: () => void;
}


const CardComponent: FC<Props> = ({ imageSource, isWork, ratio, time, title, distance }) => {

  const navigation = useNavigation<AuthenticationRouteList>()

  const onPress = () => {
    navigation.navigate("barbershopinformation")
  }

  return (
    <View style={styles.undefinedStyle}>
      <View style={styles.cardBody}>
        <Image style={styles.cardImage} source={imageSource} />
        <View style={styles.discriptionContainer}>
          <View style={styles.workContainer}>
            <Text style={[styles.workText, isWork ? { color: 'green' } : { color: 'red' }]}>{isWork ? 'Ochiq' : 'Yopiq'}</Text>
            <DoteIcon />
            <Text style={styles.timeText}>{time}</Text>
          </View>
          <Text style={styles.cardTitle}>{title}</Text>
          <View style={styles.locationBox}>
            <LocationIcon />
            <Text style={styles.distanceText}>{distance}</Text>
          </View>
          <TouchableOpacity style={styles.buyButton} onPress={onPress}>
            <Text style={styles.buyText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const NearbyBarbershopScreen = () => {

  const navigation = useNavigation()

  const goBack = () => {
    navigation.goBack()
  }

  const data = [
    {
      id: 1,
      imageSource: require("../../assets/images/CardBarberPhoto.png"),
      ratio: "4",
      isWork: true,
      time: "10 : 00 - 23 : 00",
      title: "The Face Factory",
      distance: "0.2 km",
    },
    {
      id: 2,
      imageSource: require("../../assets/images/CardBarberPhoto.png"),
      ratio: "3",
      isWork: false,
      time: "12 : 00 - 02 : 00",
      title: "The Face Factory",
      distance: "1.2 km",
    },
    {
      id: 3,
      imageSource: require("../../assets/images/CardBarberPhoto.png"),
      ratio: "2",
      isWork: true,
      time: "09 : 00 - 22 : 00",
      title: "The Face Factory",
      distance: "2.2 km",
    },
  ];

  return (
    <View style={styles.container}>
      <HeaderTitleArrow title="Oxirgi tashriflar" style={{ paddingBottom: 20 }} onPress={goBack} />
      <FlatList
        data={data}
        pagingEnabled
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardComponent
            imageSource={item.imageSource}
            isWork={item.isWork}
            time={item.time}
            title={item.title}
            distance={item.distance} ratio={""} />
        )}
        contentContainerStyle={styles.flatlistContainer}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{
          columnGap: COLUMN_GAP
        }}
      />
    </View>
  );
};

export default NearbyBarbershopScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardBody: {
    width: CATALOG_CARD_WIDTH,
    padding: 6,
    borderRadius: 8,
    backgroundColor: palette.backWhite,
    borderWidth: 1,
    borderColor: "rgba(20, 20, 92, 0.10)",
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center"
  },
  discriptionContainer: {
    width: "100%",
    marginTop: 10,
    gap: 7
  },
  cardImage: {
    width: 160,
    height: 142,
    borderRadius: 4,
  },
  workContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  workText: {
    fontSize: 10,
    fontWeight: "400",
    color: palette.green,
  },
  timeText: {
    fontSize: 10,
    fontWeight: "400",
    opacity: 0.4,
    color: palette.mainBlack,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: palette.mainBlack,
  },
  locationBox: {
    flexDirection: "row",
    gap: 10,
    opacity: 0.4,
  },
  distanceText: {
    fontSize: 10,
    fontWeight: "400",
    color: palette.mainBlack,
  },
  buyButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 32,
    backgroundColor: palette.mainBlack,
    borderRadius: 10,
  },
  buyText: {
    fontSize: 12,
    fontWeight: "500",
    color: palette.backWhite,
  },
  undefinedStyle: {
    gap: 12,
    flexDirection: 'row',
  },
  flatlistContainer: {
    paddingHorizontal: 15,
    gap: 8
  }
});