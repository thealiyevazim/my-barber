import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { ProfileIcon } from '~assets/icons';
import { AppText } from '../AppText/AppText';
import { Barbers } from '~shared';
import { colors, windowHeight, windowWidth } from '~utils';

type Props = {
  item: Barbers;
  handleCardPress: (item: Barbers) => void;
};

export const BarberInfoCard: React.FC<Props> = ({ item, handleCardPress }) => {
  return (
    <View style={styles.cardContainer}>
      <Shadow distance={6} startColor="#efefef">
        <View style={styles.cardInner}>
          {item.images[0] ? (
            <Image source={{ uri: item.images[0] }} style={styles.cardImage} />
          ) : (
            <View
              style={[
                styles.cardImage,
                { justifyContent: 'center', alignItems: 'center' },
              ]}>
              <ProfileIcon size={70} />
            </View>
          )}
          <View style={styles.buttonJustify}>
            <View style={styles.cardJustify}>
              <View style={styles.cardOpenRow}>
                <AppText style={[styles.cardOpen, { color: colors.iconGray }]}>
                  {item.working_hours ? item.working_hours : 'Faol emas'}
                </AppText>
              </View>
              <AppText style={styles.cardName} numberOfLines={2}>
                {item.full_name}
              </AppText>
              <View style={styles.rating}>
                <AppText style={styles.ratingText}>{item.location}</AppText>
              </View>
            </View>
            <Pressable
              style={styles.bookNow}
              onPress={() => handleCardPress(item)}>
              <AppText style={{ color: colors.white }}>Bron qilish</AppText>
            </Pressable>
          </View>
        </View>
      </Shadow>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginRight: 15,
    width: windowWidth / 2.2,
    height: windowHeight / 3,
  },
  cardInner: {
    borderRadius: 8,
    width: windowWidth / 2.2,
    height: windowHeight / 3,
    backgroundColor: colors.white,
  },
  cardImage: {
    height: '50%',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    resizeMode: 'cover',
  },
  cardOpenRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardOpen: {
    fontSize: 12,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 100,
    backgroundColor: colors.appBlack,
  },
  cardName: {
    fontSize: 16,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  ratingText: {
    fontSize: 12,
    color: colors.iconGray,
  },
  bookNow: {
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.appBlack,
    marginHorizontal: 8,
  },

  buttonJustify: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 8,
  },

  cardJustify: {
    paddingHorizontal: 8,
  },
});
