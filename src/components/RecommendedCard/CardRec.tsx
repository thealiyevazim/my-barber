import React, { FC, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ImageSourcePropType,
  Image,
  Text,
} from "react-native";
import { palette } from "~utils/theme";
// ----- SVG ----- //
import LocationIcon from "~assets/icons/LocationIcon";
import StarIcon from "~assets/icons/StartIcon";

const { height, width } = Dimensions.get("window");

export interface PropsCarouselData {
  id: number;
  imageSource: ImageSourcePropType;
  ratio: string;
  isWork: boolean;
  opentime: string;
  closetime: string;
  title: string;
  distance: string;
  total: string;
  handleClick?: () => void;
}

const CardRec: FC<{ data: PropsCarouselData[] }> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.carouselContainer}>
      <FlatList
        data={data}
        pagingEnabled
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={{
                width: width,
                alignItems: "center",
                ...styles.itemContainer,
              }}
            >
              <TouchableOpacity disabled={true} style={styles.carouselCardBox}>
                <View style={styles.leftImage}>
                  <Image source={item.imageSource} style={styles.backImage} />
                </View>
                <View style={styles.rightContainer}>
                  <View style={styles.rightTextTopContainer}>
                    <Text>{item.title}</Text>
                    <View style={styles.starRatio}>
                      {/* SVG Image */}
                      <StarIcon style={styles.starIcon} />
                      <Text style={styles.ratioText}>{item.ratio}/5</Text>
                      <Text style={styles.totalText}>{item.total}</Text>
                    </View>
                  </View>
                  <View style={styles.middleContainer}>
                  {/* <Text style={[styles.workText ,isWork ? {color : 'green'} : {color : 'red'}]}>{isWork ? 'Ochiq' : 'Yopiq'}</Text> */}
                  </View>
                  <View style={styles.rightBottomContainer}>
                    <Text>{item.opentime}</Text>
                    <Text>{item.closetime}</Text>
                    <Text>{item.distance}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        // keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
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
            />
          );
        })}
      </View>
    </View>
  );
};

export default CardRec;

const styles = StyleSheet.create({
  carouselContainer: {
    height: 200,
    marginLeft: -16,
    justifyContent: "center",
  },
  controllerStyle: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderWidth: 1,
    borderColor: "red",
  },
  backImage: {
    width: 60,
    height: 60,
  },
  contentContainer: {
    alignItems: "center",
  },
  itemContainer: {},
  leftImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  rightContainer: {
    flexDirection: "column",
    gap: 5,
  },
  carouselCardBox: {
    width: 325,
    height: 76,
    borderWidth: 1,
    borderColor: "rgba(20, 20, 92, 0.10)",
    backgroundColor: palette.backWhite,
    borderRadius: 10,
    padding: 7,
    flexDirection: "row",
    gap: 10,
  },
  rightTextTopContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  starRatio: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  starIcon: {
    fontSize: 14,
  },
  ratioText: {
    fontSize: 10,
    fontWeight: "400",
    color: palette.mainBlack,
  },
  totalText: {
    fontSize: 10,
    fontWeight: "400",
    color: palette.totalGray,
  },
  rightBottomContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  workText: {
    fontSize: 10,
    fontWeight: "400",
    color: palette.green,
  },
  middleContainer:{
    alignItems:'flex-start',
  },
});