import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { FC } from "react";

// ------ SVG images ------ //
import LocationIcon from "~assets/icons/LocationIcon";
import StarIcon from "~assets/icons/StartIcon";
import { palette } from "~utils/theme";

interface Props {
  imageSource: any,
  isWork: boolean,
  time: string,
  title: string,
  distance: string,
  ratio: string,
  total: string,
  handleClick?: () => void;
}

// ------ Card Component style ----- //
const CardComponent: FC<Props> = ({ imageSource, isWork, time, ratio, total, title, distance }) => {
  return (
    <TouchableOpacity style={styles.cardBody}>
      <Image style={styles.cardImage} source={imageSource} />
      <View style={styles.lastContainerRight}>
        <Text style={styles.lastTitle}>{title}</Text>
        <View style={styles.starRatio}>
          <StarIcon />
          <Text style={styles.ratioText}>{ratio}/5</Text>
          <Text style={styles.totalText}>{total}</Text>
        </View>
        <View style={styles.locationBox}>
          <LocationIcon />
          <Text style={styles.distanceText}>{distance}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const CardFlatList = () => {

  const data = [
    {
      id: 1,
      imageSource: require("../../assets/images/Rectangle1.png"),
      ratio: "4",
      isWork: true,
      time: "10 : 00 - 23 : 00",
      title: '"Power Barber"',
      distance: "0.2 km",
      total: "(265)",
    },
    {
      id: 2,
      imageSource: require("../../assets/images/Rectangle2.png"),
      ratio: "3",
      isWork: false,
      time: "12 : 00 - 02 : 00",
      title: '"The Face Factory"',
      distance: "1.2 km",
      total: "(135)",
    },
    {
      id: 3,
      imageSource: require("../../assets/images/Rectangle1.png"),
      ratio: "2",
      isWork: true,
      time: "09 : 00 - 22 : 00",
      title: '"The Face Factory"',
      distance: "2.2 km",
      total: "(473)",
    },
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CardComponent
          imageSource={item.imageSource}
          ratio={item.ratio}
          title={item.title}
          total={item.total}
          distance={item.distance} isWork={false} time={""} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default CardFlatList;

const styles = StyleSheet.create({
  cardBody: {
    width: 230,
    height: 76,
    padding: 10,
    borderRadius: 8,
    gap: 12,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: palette.backWhite,
    borderWidth: 1,
    borderColor: "rgba(20, 20, 92, 0.10)",
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 4,
  },
  lastContainerRight: {
    flexDirection: "column",
    gap: 5,
    alignItems: "flex-start",
  },
  lastTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: palette.mainBlack,
  },
  starRatio: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  ratioText: {
    fontSize: 10,
    fontWeight: "400",
    color: palette.mainBlack,
  },
  totalText: {
    fontSize: 10,
    fontWeight: '400',
    color: palette.totalGray
  },
  locationBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    opacity: 0.4,
  },
  distanceText: {
    fontSize: 10,
    fontWeight: "400",
    color: palette.mainBlack,
  },
});
