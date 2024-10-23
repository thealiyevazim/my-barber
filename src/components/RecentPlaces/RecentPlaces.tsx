import React, { useCallback } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { AppText } from '../AppText/AppText';
import { Routes } from '~navigation';
import { Barbers, useTypedNavigation } from '~shared';
import { useBarbersData, useBarbersDataLoading } from '~store';
import { colors } from '~utils';
import { RecentPlacesLoader } from './RecentPlacesLoader';
import { RecentPlaceCard } from '../RecentPlaceCard/RecentPlaceCard';

type Props = {
  handleCardPress: (card: Barbers) => void;
};

export const RecentPlaces: React.FC<Props> = ({ handleCardPress }) => {
  const { navigate } = useTypedNavigation<'client'>();
  const barbers = useBarbersData();
  const barbersLoading = useBarbersDataLoading();

  const handleShowAll = useCallback(() => {
    navigate(Routes.allBarberScreen);
  }, []);

  const renderItem = useCallback(({ item }: ListRenderItemInfo<Barbers>) => {
    return <RecentPlaceCard handleCardPress={handleCardPress} item={item} />;
  }, []);

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
});
