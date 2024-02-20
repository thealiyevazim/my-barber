import React, { FC, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  ImageSourcePropType,
  Image,
} from "react-native";

const { height, width } = Dimensions.get("window");

export interface PropsCarouselData {
  id: number;
  source: ImageSourcePropType;
}

const carouselData: PropsCarouselData[] = [
  { id: 1, source: require("./../../assets/images/CarouselSlider.png") },
  { id: 2, source: require("./../../assets/images/CarouselSlider.png") },
  { id: 3, source: require("./../../assets/images/CarouselSlider.png") },
];

const CarouselMain = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.carouselContainer}>
      <FlatList
        data={carouselData}
        pagingEnabled
        renderItem={({ item, index }) => {
          return (
            <View style={[styles.itemContainer, index === carouselData.length - 1 && styles.lastItemContainer]}>
              <Image
                source={item.source}
                style={styles.backImage}
                resizeMode="stretch"
              />
            </View>
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
        onScroll={(e) => {
          const x = e.nativeEvent.contentOffset.x;
          setCurrentIndex(Math.round(x / width));
        }}
        snapToInterval={width}
        decelerationRate="fast"
      />
      <View style={styles.controllerStyle}>
        {carouselData.map((item, index) => (
          <View
            key={index}
            style={{
              width: currentIndex === index ? 20 : 8,
              height: currentIndex === index ? 3 : 3,
              borderRadius: currentIndex === index ? 5 : 4,
              backgroundColor: currentIndex === index ? "#181818" : "#9f9d9d",
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default CarouselMain;

const styles = StyleSheet.create({
  carouselContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -7,
  },
  controllerStyle: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "center",
    gap: 5,
  },
  backImage: {
    width: width - 40,
    height: 155,
    borderRadius: 10,
  },
  contentContainer: {
    alignItems: "center",
  },
  itemContainer: {
    width: width - 13,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  lastItemContainer: {
    width: "auto",
  },
});
