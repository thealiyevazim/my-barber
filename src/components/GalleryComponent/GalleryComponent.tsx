import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { AppText } from '../AppText/AppText';
import GallerySplash from '~assets/images/gallerySplash.png';
import { colors, windowWidth } from '~utils';
import Modal from 'react-native-modal';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import Pagination from '~components/SnapCarousel/Pagination';
import { useSharedValue } from 'react-native-reanimated';
import { GoBackIcon } from '~assets/icons';

interface Props {
  number?: string;
  gallery?: string[];
}

export const GalleryComponent: React.FC<Props> = ({ number, gallery }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const carouselRef = useRef<ICarouselInstance>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const progressValue = useSharedValue<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  const firstImage = gallery && gallery.length > 0 ? gallery[0] : null;

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    if (!isLoading) {
      carouselRef.current?.next();
    }
  }, [isLoading]);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.container}
        onPress={handleOpenModal}>
        {firstImage ? (
          <Image source={{ uri: firstImage }} style={styles.image} />
        ) : (
          <Image source={GallerySplash} style={styles.image} />
        )}
        <AppText semibold style={styles.number}>
          {number}
        </AppText>
      </TouchableOpacity>
      <Modal isVisible={openModal} style={styles.modalView}>
        <View style={styles.carouselContainer}>
          {isLoading ? (
            <ActivityIndicator size={'large'} color={colors.appBlack} />
          ) : (
            <>
              <Carousel
                data={gallery || []}
                loop={true}
                vertical={false}
                ref={carouselRef}
                width={windowWidth}
                onSnapToItem={index => {
                  setActiveSlide(index);
                  progressValue.value = index;
                }}
                renderItem={({ item }) => (
                  <Image source={{ uri: item }} style={styles.imageModal} />
                )}
              />
              <Pagination
                data={gallery || []}
                progressValue={progressValue}
                activeColor={colors.white}
                inactiveColor={colors.appGray}
              />
            </>
          )}
          <Pressable
            style={styles.closeBtn}
            onPress={() => setOpenModal(false)}>
            <GoBackIcon
              style={styles.icon}
              stroke={colors.white}
              width={45}
              height={45}
            />
          </Pressable>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 170,
    borderRadius: 8,
  },
  number: {
    fontSize: 35,
    zIndex: 1,
    position: 'absolute',
    color: colors.white,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    margin: 0,
  },
  carouselContainer: {
    backgroundColor: 'black',
    flex: 1,
    padding: 20,
    marginVertical: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageModal: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  icon: {
    transform: [{ rotate: '90deg' }],
    width: 50,
    height: 50,
  },
  closeBtn: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
  },
});
