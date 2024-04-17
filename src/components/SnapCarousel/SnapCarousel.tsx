import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, View } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { colors, windowHeight, windowWidth } from "~utils";

type Props = {
  carouselData: { id: number; url: string }[];
};

export const SnapCarousel: React.FC<Props> = ({ carouselData }) => {
  const carouselRef = useRef<ICarouselInstance>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    if (!isLoading) {
      carouselRef.current?.next();
    }
  }, [isLoading]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={"large"} color={colors.appBlack} />
      ) : (
        <>
          <Carousel
            data={carouselData}
            vertical={false}
            ref={carouselRef}
            width={windowWidth}
            onSnapToItem={(index) => setActiveSlide(index)}
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <Image source={{ uri: item.url }} style={styles.image} />
              </View>
            )}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: windowHeight / 5,
  },

  imageContainer: { flex: 1, marginHorizontal: 16 },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
    resizeMode: "cover",
  },
});