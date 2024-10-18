import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { ProfileIcon } from '~assets/icons';
import { AppText } from '../AppText/AppText';
import { Barbers } from '~shared';
import { colors, windowWidth } from '~utils';

type Props = {
  item: Barbers;
  handleCardPress: (item: Barbers) => void;
};

export const RecentPlaceCard: React.FC<Props> = ({ item, handleCardPress }) => {
  return (
    <Pressable onPress={() => handleCardPress(item)}>
      <Shadow distance={6} startColor="#efefef">
        <View style={styles.cardContainer}>
          {item.images?.[0] ? (
            <Image
              source={{ uri: item.images?.[0] }}
              style={styles.cardImage}
            />
          ) : (
            <View
              style={[
                styles.cardImage,
                { justifyContent: 'center', alignItems: 'center' },
              ]}>
              <ProfileIcon active size={50} />
            </View>
          )}

          <View style={styles.cardDetails}>
            <AppText semibold style={styles.cardName} numberOfLines={1}>
              {item.full_name}
            </AppText>
            <View style={styles.rating}>
              <AntDesign name="star" size={18} color="gold" />
              {/* <AppText> {item.rating}/5</AppText> */}
            </View>
            <View style={styles.rating}>
              <AppText numberOfLines={1}>{item.location}</AppText>
            </View>
          </View>
        </View>
      </Shadow>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginRight: 15,
    padding: 8,
    borderRadius: 6,
    width: windowWidth / 1.4,
    backgroundColor: colors.white,
    flexDirection: 'row',
  },
  cardImage: {
    width: '25%',
    height: 80,
    borderRadius: 6,
    resizeMode: 'cover',
  },
  cardName: {
    fontSize: 16,
    color: colors.appBlack,
  },
  rating: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  cardDetails: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
});
