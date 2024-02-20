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
import React, { FC, useState } from "react";

const { height, width } = Dimensions.get("window");

export interface PropsCarouselData {
  id: number;
  source: ImageSourcePropType;
}

// ------ SVG images ------ //
import LocationIcon from "~assets/icons/LocationIcon";
import DoteIcon from "~assets/icons/DoteIcon";
import StarIcon from "~assets/icons/StartIcon";
import TimeLine from "~assets/icons/TimeLine";
import { palette } from "~utils/theme";
import { spacing } from "@shopify/restyle";

// ------ Card Component style ----- //

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

  return (
    <View style={styles.undefinedStyle}>
      <TouchableOpacity style={styles.cardBody}>
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
    </View>
  );
};

const CardFlatList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <View>

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
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => {
          const x = e.nativeEvent.contentOffset.x;
          setCurrentIndex(Math.round(x / width));
        }}
      />
      <View style={styles.controllerStyle}>
        {data.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                width: currentIndex === index ? 6 : 6,
                height: currentIndex === index ? 6 : 6,
                borderRadius: currentIndex === index ? 3 : 3,
                backgroundColor: currentIndex === index ? "#181818" : "#9f9d9d",
              }}
            >

            </View>
          );
        })}
      </View>

    </View>
  );
};

export default CardFlatList;

const styles = StyleSheet.create({
  cardBody: {
    width: 330,
    height: 76,
    padding: 8,
    borderRadius: 10,
    gap: 12,
    backgroundColor: palette.backWhite,
    borderWidth: 1,
    borderColor: "rgba(20, 20, 92, 0.10)",
    flexDirection: "row",
  },
  cardImage: {
    width: 60,
    height: 60,
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
  undefinedStyle: {
    marginRight: 7,
  },
  rightSideBox: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 5,
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
  controllerStyle: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
    marginTop: 15,
  },
});
