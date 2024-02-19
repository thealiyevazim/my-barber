import React, { FC, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ImageSourcePropType,
  Image,
} from "react-native";

const { height, width } = Dimensions.get("window");

export interface PropsCarouselData {
  id: number;
  source: ImageSourcePropType;
  handleClick?: () => void;

}

const CarouselMain: FC<{ data: PropsCarouselData[] }> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.carouselContainer}>
      <FlatList
        data={data}
        pagingEnabled
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{
                width: width,
                alignItems: "center",
                ...styles.itemContainer
              }}
            >
              <TouchableOpacity disabled={true} style={styles.carouselCardBox}>
                <Image
                  source={item.source}
                  style={styles.backImage}
                />
              </TouchableOpacity>
            </TouchableOpacity>
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
      />
      <View style={styles.controllerStyle}>
        {data.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                width: currentIndex === index ? 30 : 8,
                height: currentIndex === index ? 3 : 3,
                borderRadius: currentIndex === index ? 5 : 4,
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

export default CarouselMain;

const styles = StyleSheet.create({
  carouselContainer: {
    height: 200,
    gap:10,
    marginLeft:-16,
    justifyContent:'center'
  },
 
  controllerStyle: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
  },
  backImage: {
    width: 310,
    height: 155,
    borderRadius: 10, 
    // Add border radius of 10
    // gap:10,
  },
  contentContainer: {
    alignItems: "center",
  },
  itemContainer: {
    // borderRadius: 10,
  },
  carouselCardBox:{
    // borderRadius:10,
  }
});