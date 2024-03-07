import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { FC } from "react";

import LocationIcon from "~assets/icons/LocationIcon";
import StarIcon from "~assets/icons/StartIcon";
import { palette } from "~utils/theme";
import { HeaderTitleArrow } from "~components";
import { useNavigation } from "@react-navigation/native";
import { AuthenticationRouteList } from "~navigation";

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

const CardComponent: FC<Props> = ({ imageSource, ratio, total, title, distance }) => {

  const navigation = useNavigation<AuthenticationRouteList>()

  const onPress = () => {
    navigation.navigate("barbershopinformation")
  }

  return (
    <TouchableOpacity style={styles.cardBody} onPress={onPress}>
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

const LatestVisitScreen = () => {

  const navigation = useNavigation()

  const goBack = () => {
    navigation.goBack()
  }

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
    <View style={styles.container}>
      <HeaderTitleArrow title="Oxirgi tashriflar" style={{ paddingBottom: 20 }} onPress={goBack} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardComponent
            imageSource={item.imageSource}
            ratio={item.ratio}
            title={item.title}
            total={item.total}
            distance={item.distance}
            isWork={false}
            time={""}
          />
        )}
        contentContainerStyle={styles.flatlistContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default LatestVisitScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardBody: {
    width: "100%",
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: palette.backWhite,
    borderWidth: 1,
    borderColor: "rgba(20, 20, 92, 0.10)",
    gap: 20
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
  flatlistContainer: {
    paddingHorizontal: 15,
    gap: 8
  }
});
