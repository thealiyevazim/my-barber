import { AntDesign } from '@expo/vector-icons';
import React, { useCallback } from 'react';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { ProfileIcon } from '~assets/icons';
import { AppText } from '~components/AppText';
import { Routes } from '~navigation';
import { Barbers, useTypedNavigation } from '~shared';
import { useBarbersData, useBarbersDataLoading } from '~store';
import { colors, windowWidth } from '~utils';
import { RecentPlacesLoader } from './RecentPlacesLoader';

type Props = {
  handleCardPress: () => void;
};

export const RecentPlaces: React.FC<Props> = ({ handleCardPress }) => {
  const { navigate } = useTypedNavigation<'client'>();
  const barbers = useBarbersData();
  const barbersLoading = useBarbersDataLoading();

  const handleShowAll = useCallback(() => {
    navigate(Routes.allBarberScreen);
  }, []);

  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<Barbers>) => {
      return (
        <Pressable onPress={handleCardPress}>
          <Shadow distance={6} startColor="#efefef">
            <View style={styles.cardContainer}>
              {item.images[0] ? (
                <Image
                  source={{ uri: item.images[0] }}
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
    },
    [],
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerComp}>
        <AppText bold style={styles.title}>
          So'ngi tashriflar
        </AppText>
        <Pressable onPress={handleShowAll}>
          <AppText style={styles.showAll}>Barchasi</AppText>
        </Pressable>
      </View>
      {barbersLoading ? (
        <RecentPlacesLoader />
      ) : (
        <FlatList
          horizontal
          data={barbers}
          style={{ padding: 4 }}
          renderItem={renderItem}
          persistentScrollbar={true}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 15,
  },
  headerComp: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: colors.appBlack,
  },
  showAll: {
    fontSize: 14,
    color: colors.iconGray,
  },
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
