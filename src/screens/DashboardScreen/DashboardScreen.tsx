import React, { useCallback, useEffect } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { MainInfoCard } from '../../components/MainInfoCard';
import { MainSearch } from '../../components/MainSearch';
import { RecentPlaces } from '../../components/RecentPlaces';
import { SnapCarousel } from '../../components/SnapCarousel';
import { Routes } from '~navigation';
import { Barbers, useTypedNavigation } from '~shared';
import {
  clientGetMeData,
  getBarbers,
  getBarbersId,
  useAppDispatch,
  useBarbersDataLoading,
  useClientGetMeLoading,
} from '~store';
import { SafeAreaTemplate } from '~templates';
import { colors } from '~utils';

const carouselMockData = [
  {
    id: 1,
    url: 'https://www.peluker.com/blog/wp-content/uploads/2024/02/La-Evolucion-del-Barbershop-De-Clasico-a-Moderno.jpg',
  },
  {
    id: 2,
    url: 'https://img.freepik.com/premium-photo/barbershop-chronicles-photography-barbershop-background-retro-style_1016726-62.jpg',
  },
];

export const DashboardScreen: React.FC = () => {
  const { navigate } = useTypedNavigation<'client'>();

  const dispatch = useAppDispatch();
  const clientLoading = useClientGetMeLoading();
  const getBarbersLoading = useBarbersDataLoading();

  const isLoading = clientLoading || getBarbersLoading;

  const onUndefinedPress = () => undefined;

  const handleBooked = (barber: Barbers) => {
    dispatch(getBarbersId(barber));
    navigate(Routes.bookedScreen, { barberId: barber.id });
  };

  const handleRecentBooked = (barber: Barbers) => {
    dispatch(getBarbersId(barber));
    navigate(Routes.bookedScreen, { barberId: barber.id });
  };

  const fetchMainData = useCallback(() => {
    dispatch(clientGetMeData());

    dispatch(getBarbers({ page: 1 }));
  }, []);

  useEffect(() => {
    fetchMainData();
  }, []);

  return (
    <SafeAreaTemplate>
      <MainSearch onNotificationPress={onUndefinedPress} />
      <ScrollView
        style={{ flex: 1, marginBottom: -30 }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            tintColor={colors.appBlack}
            onRefresh={fetchMainData}
          />
        }>
        <SnapCarousel carouselData={carouselMockData} />
        <RecentPlaces handleCardPress={handleRecentBooked} />
        <MainInfoCard handleCardPress={handleBooked} />
      </ScrollView>
    </SafeAreaTemplate>
  );
};
