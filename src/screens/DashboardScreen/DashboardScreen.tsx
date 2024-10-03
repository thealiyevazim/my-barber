import React from "react";
import { ScrollView, View } from "react-native";
import {
  MainInfoCard,
  MainSearch,
  RecentPlaces,
  SnapCarousel,
} from "~components";
import { Routes } from "~navigation";
import { useTypedNavigation } from "~shared";
import { SafeAreaTemplate } from "~templates";

const carouselMockData = [
  {
    id: 1,
    url: "https://assets-global.website-files.com/644a9d9ce529ef8812f82a28/647fb85c69e95444243ef9bd_Henley%27s%20Gentlemen%27s%20Grooming%20-%20Barbershop%20and%20Mens%20Grooming.webp",
  },
  {
    id: 2,
    url: "https://heyjoe-7efd.kxcdn.com/wp-content/uploads/barberia-destacada-does-barbershop.jpg",
  },
];

export const DashboardScreen: React.FC = () => {
  const { navigate } = useTypedNavigation<"client">();

  const onUndefinedPress = () => undefined;

  const handleBooked = () => {
    navigate(Routes.bookedScreen)
  }

  return (
    <SafeAreaTemplate>
      <MainSearch onNotificationPress={onUndefinedPress} />
      <ScrollView style={{ flex: 1, marginBottom: -30 }} showsVerticalScrollIndicator={false}>
        <SnapCarousel carouselData={carouselMockData} />
        <RecentPlaces
          handleCardPress={handleBooked}
        />
        <MainInfoCard
          handleCardPress={handleBooked}
        />
        <View></View>
      </ScrollView>
    </SafeAreaTemplate>
  );
};
