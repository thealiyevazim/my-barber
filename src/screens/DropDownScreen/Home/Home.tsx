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

const handleSearch = (searchText: string) => {
  console.log("Search Text:", searchText);
};

const Home: React.FC = () => {

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <SearchComponent onSearch={handleSearch} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 130 }}
        showsVerticalScrollIndicator={false}
      >
        <CarouselMain />
        <TitleComponent title="Oxirgi tashriflar" btnTitle="Barchasi" />
        <LastFlatList />
        <TitleComponent title="Yaqinda joylashgan" btnTitle="Barchasi" />
        <CardFlatList />
        <TitleComponent btnTitle="Barchasi" title="Ko'p tavsiya etilnganlar" />
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
