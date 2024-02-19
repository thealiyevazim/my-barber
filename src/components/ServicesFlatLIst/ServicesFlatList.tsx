import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { palette } from "~utils/theme";

const data = [
  {
    id: "1",
    uri: require("../../assets/images/Rectangle2.png"),
    title: "Haircut",
  },
  {
    id: "2",
    uri: require("../../assets/images/Rectangle2.png"),
    title: "Shaving",
  },
  {
    id: "3",
    uri: require("../../assets/images/Rectangle2.png"),
    title: "Styling",
  },
  {
    id: "4",
    uri: require("../../assets/images/Rectangle2.png"),
    title: "Hairdryer",
  },
  {
    id: "5",
    uri: require("../../assets/images/Rectangle2.png"),
    title: "Coloring",
  },
];

const renderItem = ({
  item,
}: {
  item: { id: string; uri: any; title: string };
}) => {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={item.uri} style={styles.image} />
      <Text style={styles.circleTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const ServicesFlatList = () => {
  return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
  );
};

export default ServicesFlatList;

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 25,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
    resizeMode: "cover",
  },
  circleTitle: {
    fontSize: 12,
    color: palette.mainBlack,
    fontWeight: "400",
    textAlign: "center",
  },
});