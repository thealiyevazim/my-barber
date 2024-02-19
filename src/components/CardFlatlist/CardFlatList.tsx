import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";
// ------ SVG images ------ //
import LocationIcon from "~assets/icons/LocationIcon";
import DoteIcon from "~assets/icons/DoteIcon";
import { palette } from "~utils/theme";
import { spacing } from "@shopify/restyle";

// ------ Card Component style ----- //

interface Props {
  imageSource:any ,
  isWork:boolean,
  time:string,
  title:string,
  distance:string,
  ratio:string,
  handleClick?: () => void;
}


const CardComponent:FC<Props> = ({ imageSource, isWork,ratio, time, title, distance }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.undefinedStyle}>

    <View style={styles.cardBody}>
      <Image style={styles.cardImage} source={imageSource} />
      <View style={styles.workContainer}>
        <Text style={[styles.workText ,isWork ? {color : 'green'} : {color : 'red'}]}>{isWork ? 'Ochiq' : 'Yopiq'}</Text>
        {/* SVG image */}
        <DoteIcon />
        <Text style={styles.timeText}>{time}</Text>
      </View>
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={styles.locationBox}>
        {/* SVG image  */}
        <LocationIcon />
        <Text style={styles.distanceText}>{distance}</Text>
      </View>
      <TouchableOpacity style={styles.buyButton}  onPress={() => navigation.navigate("barbershopinformation")}>
        <Text style={styles.buyText}>Book Now</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const CardFlatList = () => {

  const data = [
    {
      id: 1,
      imageSource: require("../../assets/images/CardBarberPhoto.png"),
      ratio: "4",
      isWork: true,
      time: "10 : 00 - 23 : 00",
      title: "The Face Factory",
      distance: "0.2 km",
    },
    {
      id: 2,
      imageSource: require("../../assets/images/CardBarberPhoto.png"),
      ratio: "3",
      isWork: false,
      time: "12 : 00 - 02 : 00",
      title: "The Face Factory",
      distance: "1.2 km",
    },
    {
      id: 3,
      imageSource: require("../../assets/images/CardBarberPhoto.png"),
      ratio: "2",
      isWork: true,
      time: "09 : 00 - 22 : 00",
      title: "The Face Factory",
      distance: "2.2 km",
    },
  ];

  return (
    <FlatList
      data={data}
      pagingEnabled
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CardComponent 
          imageSource={item.imageSource}
          isWork={item.isWork}
          time={item.time}
          title={item.title}
          distance={item.distance} ratio={""}        />
      )}
      horizontal={true}
    />
  );
};

export default CardFlatList;

const styles = StyleSheet.create({
  cardBody: {
    width: 195,
    height: 288,
    padding: 6,
    borderRadius: 8,
    gap:11,
    backgroundColor: palette.backWhite,
    marginRight:12,
    borderWidth:1,
    borderColor:"rgba(20, 20, 92, 0.10)",
    flexDirection:'column',
  },
  cardImage: {
    width: 180,
    height: 142,
    borderRadius: 4,
  },
  workContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  workText: {
    fontSize: 10,
    fontWeight: "400",
    color: palette.green,
  },
  timeText: {
    fontSize: 10,
    fontWeight: "400",
    opacity: 0.4,
    color: palette.mainBlack,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: palette.mainBlack,
  },
  locationBox: {
    flexDirection: "row",
    gap: 10,
    opacity: 0.4,
  },
  distanceText: {
    fontSize: 10,
    fontWeight: "400",
    color: palette.mainBlack,
  },
  buyButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 180,
    height: 32,
    backgroundColor: palette.mainBlack,
    borderRadius:10,
  },
  buyText: {
    fontSize: 12,
    fontWeight: "500",
    color: palette.backWhite,
  },
  flatOwnStyle: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  undefinedStyle:{
    gap:12,
    flexDirection:'row',
  },
});