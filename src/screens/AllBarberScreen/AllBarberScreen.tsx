import React, { useCallback } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { GoBackIcon } from '~assets/icons';
import { AppText } from '~components';
import { BarberInfoCard } from '~components/BarberInfoCard';
import { Routes } from '~navigation';
import { Barbers, useTypedNavigation } from '~shared';
import { useBarbersData } from '~store';
import { SafeAreaTemplate } from '~templates';
import { colors, windowHeight, windowWidth } from '~utils';

export const AllBarberScreen: React.FC = () => {
  const { goBack } = useTypedNavigation();

  const barbers = useBarbersData();
  const { navigate } = useTypedNavigation<'client'>();

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleBooked = () => {
    navigate(Routes.bookedScreen);
  };

  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<Barbers>) => {
      return <BarberInfoCard handleCardPress={handleBooked} item={item} />;
    },
    [],
  );

  return (
    <SafeAreaTemplate style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.7} onPress={handleGoBack}>
          <GoBackIcon style={styles.icon} stroke={colors.appBlack} />
        </TouchableOpacity>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <AppText semibold style={styles.headerTitle}>
            Barbers
          </AppText>
        </View>
      </View>
      <FlatList
        data={barbers}
        renderItem={renderItem}
        persistentScrollbar={true}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </SafeAreaTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    // Styles for container
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 30,
    marginBottom: 20,
  },
  headerTitle: {
    alignSelf: 'center',
    fontSize: 22,
  },
  icon: {
    transform: [{ rotate: '180deg' }],
  },
  cardContainer: {
    padding: 5,
    marginRight: 15,
  },
  cardInner: {
    padding: 8,
    borderRadius: 8,
    width: windowWidth / 2.4,
    height: windowHeight / 3.5,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  cardImage: {
    height: '50%',
    borderRadius: 6,
    resizeMode: 'cover',
  },
  cardOpenRow: {
    width: '75%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    height: '15%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.appBlack,
  },
});

export default AllBarberScreen;
