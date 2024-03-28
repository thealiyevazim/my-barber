import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ImageSourcePropType,
} from "react-native";
import React, { FC } from "react";

export interface PropsCarouselData {
  id: number;
  source: ImageSourcePropType;
}

import LocationIcon from "~assets/icons/LocationIcon";
import StarIcon from "~assets/icons/StartIcon";
import TimeLine from "~assets/icons/TimeLine";
import { palette } from "~utils/theme";
import { HeaderTitleArrow } from "~components";
import { useNavigation } from "@react-navigation/native";
import { AuthenticationRouteList } from "~navigation";

interface Props {
  imageSource: any;
  isWork: boolean;
  title: string;
  distance: string;
  ratio: string;
  opentime: string;
  closetime: string;
  total: string;
  handleClick?: () => void;
}

const CardComponent: FC<Props> = ({
  imageSource,
  isWork,
  ratio,
  opentime,
  closetime,
  total,
  title,
  distance,
}) => {

  const navigation = useNavigation<AuthenticationRouteList>()

  const onPress = () => {
    navigation.navigate("barbershopinformation")
  }

  return (
    <TouchableOpacity style={styles.cardBody} onPress={onPress}>
      <Image style={styles.cardImage} source={imageSource} />
      <View style={styles.rightSideBox}>
        <View style={styles.rightTopContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
          <View style={styles.locationDiv}>
            <StarIcon />
            <Text style={styles.ratioText}>{ratio}/5</Text>
            <Text style={styles.totalText}>{total}</Text>
          </View>
        </View>
        <View style={styles.workContainer}>
          <Text
            style={[
              styles.workText,
              isWork ? { color: "green" } : { color: "red" },
            ]}
          >
            {isWork ? "Ochiq" : "Yopiq"}
          </Text>
        </View>
        <View style={styles.rightBottomBox}>
          <View style={styles.rightTimeBox}>
            <Text style={styles.workTime}>{opentime}</Text>
            <TimeLine />
            <Text style={styles.workTime}>{closetime}</Text>
          </View>
          <View style={styles.locationBox}>
            <LocationIcon />
            <Text style={styles.distanceText}>{distance}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const TopRecommendedScreen = () => {

  const navigation = useNavigation<AuthenticationRouteList>()

  const goBack = () => {
    navigation.goBack()
  }

  const data = [
    {
      id: 1,
      imageSource: require("../../assets/images/CardBarberPhoto.png"),
      ratio: "4",
      isWork: true,
      opentime: "10:00",
      closetime: "23:00",
      title: '"Power Barber"',
      distance: "0.2 km",
      total: "(125)",
    },
    {
      id: 2,
      imageSource: require("../../assets/images/CardBarberPhoto.png"),
      ratio: "3",
      isWork: false,
      opentime: "12:00",
      closetime: "21:00",
      title: ' "The Face Factory" ',
      distance: "1.2 km",
      total: "(434)",
    },
    {
      id: 3,
      imageSource: require("../../assets/images/CardBarberPhoto.png"),
      ratio: "2",
      isWork: true,
      opentime: "09:00",
      closetime: "22:00",
      title: '"The Face Factory"',
      distance: "2.2 km",
      total: "(256)",
    },
    {
      id: 4,
      imageSource: require("../../assets/images/CardBarberPhoto.png"),
      ratio: "5",
      isWork: true,
      opentime: "09:00",
      closetime: "23:00",
      title: '"The Face Factory"',
      distance: "2.2 km",
      total: "(873)",
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
            opentime={item.opentime}
            closetime={item.closetime}
            title={item.title}
            distance={item.distance}
            ratio={item.ratio}
            total={item.total}
          />
        )}
        contentContainerStyle={styles.flatlistContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TopRecommendedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardBody: {
    width: "100%",
    padding: 8,
    borderRadius: 10,
    gap: 20,
    backgroundColor: palette.backWhite,
    borderWidth: 1,
    borderColor: "rgba(20, 20, 92, 0.10)",
    flexDirection: "row",
    alignItems: "center"
  },
  cardImage: {
    width: 70,
    height: 70,
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
  cardTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: palette.mainBlack,
  },
  locationBox: {
    flexDirection: "row",
    gap: 5,
    opacity: 0.4,
  },
  distanceText: {
    fontSize: 10,
    fontWeight: "400",
    color: palette.mainBlack,
  },
  rightSideBox: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10
  },
  rightTopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  ratioText: {
    fontSize: 10,
    fontWeight: '400',
    color: palette.mainBlack,
  },
  totalText: {
    fontSize: 10,
    fontWeight: '400',
    color: palette.totalGray,
  },
  rightBottomBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightTimeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  workTime: {
    fontSize: 10,
    fontWeight: '400',
    color: palette.totalGray,
  },
  flatlistContainer: {
    paddingHorizontal: 15,
    gap: 8
  }
});
