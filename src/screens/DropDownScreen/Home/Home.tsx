import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar
} from "react-native";

// ------ Components Import  ------ //
import CarouselMain from "~components/CarouselFlatList/CarouselMain";
import SearchComponent from "~components/Search/SearchComponent";
import FilterComponent from "~components/Filtr/FiltrComponent";
import {ReccomendedCard} from "~components";
import { TitleComponent } from "~components";
import { CardFlatList } from "~components/CardFlatlist";
import { LastFlatList } from "~components/LastFlatList";
import { palette } from "~utils/theme";

const { height, width } = Dimensions.get("window");

// ------ Flatlist Carousel Data ------ //
interface CarouselDataItem {
  id: number;
  source: number;

}

const carouselData: CarouselDataItem[] = [
  { id: 1, source: require("../../../assets/images/CarouselSlider.png") },
  { id: 2, source: require("../../../assets/images/CarouselSlider.png") },
  { id: 3, source: require("../../../assets/images/CarouselSlider.png") },
  // Add more items as needed
];

const handleSearch = (searchText: string) => {
  console.log("Search Text:", searchText);
  // Perform search logic here
};

const Home: React.FC = () => {
  const [data, setData] = useState([1, 1, 1]);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.container}>
       <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <View style={styles.searchBox}>
        <SearchComponent onSearch={handleSearch} />
        <FilterComponent />
      </View>

      <ScrollView
        style={styles.scrollBody}
        contentContainerStyle={{ paddingBottom: 150 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topCarousel}>
          <CarouselMain data={carouselData} />
        </View>
        <TitleComponent  title="Oxirgi tashriflar" btnTitle="Barchasi"  />
        <View style={styles.lastShow}>
          <LastFlatList />
        </View>
        <TitleComponent  title="Yaqinda joylashgan" btnTitle="Barchasi"  />
        <View style={styles.nearestBarber}>
          <CardFlatList  />
        </View>
        <TitleComponent btnTitle="Barchasi" title="Ko'p tavsiya etilnganlar" />
          <ReccomendedCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.mainWhite,
    flex: 1,
    paddingTop: 45,
    paddingHorizontal: 12,
  },
  backImage: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 10,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    gap: 10,
  },
  boldText: {
    color: palette.mainBlack,
    fontSize: 22,
    fontWeight: "700",
  },
  nearestBarber: {
    // flex: 1,
    // padding: 16,
  },
  holdText: {
    color: palette.mainBlack,
    fontSize: 22,
    fontWeight: "700",
  },
  allTextStyle: {
    fontSize: 12,
    fontWeight: "400",
    color: palette.textLight,
  },
  lastShow: {},
  twiceText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    // paddingHorizontal: 10,
    // marginVertical: 10,
  },
  topCarousel: {
    // padding: 0,
    // margin: 0,
    marginLeft:-4,
  },
  scrollBody: {},
});

export default Home;
