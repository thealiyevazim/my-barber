import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar
} from "react-native";

// ------ Components Import  ------ //
import CarouselMain from "~components/CarouselFlatList/CarouselMain";
import SearchComponent from "~components/Search/SearchComponent";
import { ReccomendedCard } from "~components";
import { TitleComponent } from "~components";
import { CardFlatList } from "~components/CardFlatlist";
import { LastFlatList } from "~components/LastFlatList";
import { palette } from "~utils/theme";
import { useNavigation } from "@react-navigation/native";
import { AuthenticationRouteList } from "~navigation";

const handleSearch = (searchText: string) => {
  console.log("Search Text:", searchText);
};

const Home: React.FC = () => {

  const navigation = useNavigation<AuthenticationRouteList>()

  const goLatestVisitScreen = () => (
    navigation.navigate("latestVisit")
  )

  const goNearby = () => (
    navigation.navigate("nearbyBarbershop")
  )

  const goRecommended = () => (
    navigation.navigate("topRecommended")
  )

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <SearchComponent onSearch={handleSearch} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >
        <CarouselMain />
        <TitleComponent title="Oxirgi tashriflar" btnTitle="Barchasi" handleClick={goLatestVisitScreen} />
        <LastFlatList />
        <TitleComponent title="Yaqinda joylashgan" btnTitle="Barchasi" handleClick={goNearby} />
        <CardFlatList />
        <TitleComponent btnTitle="Barchasi" title="Ko'p tavsiya etilnganlar" handleClick={goRecommended} />
        <ReccomendedCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.mainWhite,
    paddingTop: 45,
    paddingHorizontal: 10,
  }
});

export default Home;
