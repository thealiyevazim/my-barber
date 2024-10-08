import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { useAppDispatch, useBarberGetMeImages } from '~store';
import { colors, windowHeight, windowWidth } from '~utils';

export const ProfileCarousel: React.FC = ({}) => {
  const carouselRef = useRef<ICarouselInstance>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const images = useBarberGetMeImages();
  const dispatch = useAppDispatch() || [];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const Pagination: React.FC<{ activeSlide: number; totalSlides: number }> = ({
    activeSlide,
    totalSlides,
  }) => {
    return (
      <View style={styles.paginationContainer}>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.line,
              {
                backgroundColor:
                  activeSlide === index ? colors.white : colors.iconGray,
              },
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={colors.appBlack} />
      ) : (
        <>
          <Pagination activeSlide={activeSlide} totalSlides={images?.length} />
          <Carousel
            data={images}
            vertical={false}
            ref={carouselRef}
            width={windowWidth}
            onSnapToItem={index => setActiveSlide(index)}
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <Image source={{ uri: item }} style={styles.image} />
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
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight / 3 + 30,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  paginationContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    zIndex: 3,
    width: '100%',
  },
  line: {
    flex: 1,
    height: 2,
  },
});
