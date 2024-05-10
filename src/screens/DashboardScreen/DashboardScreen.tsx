import React from "react";
import { View } from "react-native";
import {
  MainInfoCard,
  MainSearch,
  RecentPlaces,
  SnapCarousel,
} from "~components";
import { SafeAreaTemplate } from "~templates";
import { MainInfoCardType } from "~types";

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

const recentMockData = [
  {
    id: 1,
    rating: 4,
    distance: 1.2,
    name: "Power Barber",
    img: "https://media.timeout.com/images/102436129/750/562/image.jpg",
  },
  {
    id: 2,
    rating: 2,
    distance: 4.2,
    name: "Mister Barber",
    img: "https://www.themailroombarberco.com/cdn/shop/articles/MailroomBarberCo_TeachingSession-7_2048x.jpg?v=1642018666",
  },
  {
    id: 3,
    rating: 4.5,
    distance: 1.2,
    name: "Pro Style",
    img: "https://nationalbarbers.b-cdn.net/wp-content/uploads/2020/09/barber-services-1-768x432.png",
  },
  {
    id: 4,
    rating: 5,
    distance: 1.2,
    name: "Barbershop",
    img: "https://cdn.shopify.com/s/files/1/0001/9211/8835/files/Happy_Barber_and_Customer_Men_s_Hairstyle_480x480.png?v=1621594670",
  },
];

const mainInfoMockData: MainInfoCardType[] = [
  {
    id: 1,
    distance: 1.2,
    timeRange: "10:00 - 20:00",
    isOpen: false,
    name: "Power Barber",
    img: "https://media.timeout.com/images/102436129/750/562/image.jpg",
  },
  {
    id: 2,
    distance: 4.2,
    timeRange: "10:00 - 20:00",
    isOpen: true,
    name: "Mister Barber",
    img: "https://www.themailroombarberco.com/cdn/shop/articles/MailroomBarberCo_TeachingSession-7_2048x.jpg?v=1642018666",
  },
  {
    id: 3,
    distance: 1.2,
    timeRange: "10:00 - 20:00",
    isOpen: false,
    name: "Pro Style",
    img: "https://nationalbarbers.b-cdn.net/wp-content/uploads/2020/09/barber-services-1-768x432.png",
  },
  {
    id: 4,
    timeRange: "10:00 - 20:00",
    isOpen: true,
    distance: 1.2,
    name: "Barbershop",
    img: "https://cdn.shopify.com/s/files/1/0001/9211/8835/files/Happy_Barber_and_Customer_Men_s_Hairstyle_480x480.png?v=1621594670",
  },
];

export const DashboardScreen: React.FC = () => {
  const onUndefinedPress = () => undefined;

  return (
    <SafeAreaTemplate scrollable>
      <MainSearch onNotificationPress={onUndefinedPress} />

      <SnapCarousel carouselData={carouselMockData} />

      <RecentPlaces
        placesData={recentMockData}
        handleCardPress={onUndefinedPress}
      />

      <MainInfoCard
        mainCardInfoData={mainInfoMockData}
        handleCardPress={(cardInfo) => console.log(cardInfo)}
      />

      <View></View>
    </SafeAreaTemplate>
  );
};
