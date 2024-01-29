import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

// ---- IMAGE ----- //
import SliderImage from "../../assets/images/TopBlurImage.png";
import PlusImage from '../../assets/images/countImage.png';
import { palette } from "~utils/theme";
// ---- SVG ----- //
import LeftBack from "~assets/icons/ArrowLeft";
import LocationIcon from "~assets/icons/LocationIcon";
import StarIcon from "~assets/icons/StartIcon";
// ------ COMPONENTS ------ //
import { ServicesFlatList } from "~components/ServicesFlatLIst";
import TimeLine from "~assets/icons/TimeLine";
import ClockTimer from "~assets/icons/ClockTimer";
import { NextButton } from "~components";
const BarbershopInformation = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  const goNextPage = () => {
   navigation.navigate("bookingbarber" as never)
  }
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground source={SliderImage} style={styles.backImage} />
      </View>
      <TouchableOpacity style={styles.leftBack} onPress={goBack}>
        <LeftBack color="#ffff"/>
      </TouchableOpacity>
      <View style={styles.barberService}>
        <View style={styles.topCard}>
          <Text style={styles.bigTitle}>The Face Factory</Text>
          <View style={styles.reviewBox}>
            <View style={styles.starBox}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </View>
            <View style={styles.ratioBox}>
              <Text style={styles.ratioText}>4/5</Text>
              <Text style={styles.reviewStyle}>(265 reviews)</Text>
            </View>
          </View>
          <View style={styles.locationBox}>
            <LocationIcon />
            <Text style={styles.addressText}>Uchtepa tumani, Mahorat 23</Text>
          </View>
          <View style={styles.timeBox}>
            <ClockTimer />
            <Text style={styles.timesStyle}>10:00 - 23:00</Text>
          </View>
        </View>

        <View style={styles.servicesFlatList}>
          <Text style={styles.mainText}>Services</Text>
          <ServicesFlatList />
        </View>
          <View style={styles.galleryContainer}>
          <Text style={styles.mainText}>Gallery</Text>
            <TouchableOpacity style={styles.touchableImage}>
              <Image source={PlusImage}  style={styles.conutimageStyle}/>
              <Text style={styles.plusText}>+3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonStyle}>

          <NextButton btnTitle="Next" handleClick={goNextPage} />
          </View>
      </View>
      {/* service slider componet */}
      {/* gallery componet */}
      {/* button componet */}
    </View>
  );
};

export default BarbershopInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    flexDirection: "column",
  },
  backImage: {
    height: 257,
    width: "100%",
    resizeMode: "center",
    position: "absolute",
  },
  barberService: {
    width: "100%",
    flex: 1,
    backgroundColor: palette.mainWhite,
    top: 194,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 16,
    flexDirection: "column",
  },
  leftBack: {
    alignItems: "flex-start",
    top: 45,
    marginLeft: 15,
  },

  bigTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: palette.mainBlack,
  },
  starBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  ratioBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  reviewStyle: {
    color: palette.totalGray,
  },
  ratioText: {
    fontSize: 12,
    color: palette.mainBlack,
    fontWeight: "400",
  },
  topCard: {
    flexDirection: "column",
    alignItems: "flex-start",
    borderBottomWidth: 1,
    borderColor: palette.totalGray,
    gap: 5,
    paddingBottom: 15,
  },
  locationBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  addressText: {
    color: palette.totalGray,
    fontSize: 12,
    fontWeight: "400",
  },
  timeBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  timesStyle: {
    color: palette.totalGray,
    fontSize: 10,
    fontWeight: "400",
  },
  servicesFlatList: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  mainText: {
    fontSize: 20,
    fontWeight: "600",
    color: palette.mainBlack,
    marginVertical:10,
  },
  galleryContainer:{
    flexDirection:'column',
    alignItems:'flex-start',

  },
  touchableImage:{
    width:328,
    height:170,
    borderRadius:8,
  },
  conutimageStyle:{
    width:'100%',
    height:'100%',
    borderRadius:8,
    resizeMode:'cover',
    zIndex:-1,
  },
  plusText:{
    zIndex:1,
    color:palette.mainWhite,
    fontSize:32,
    fontWeight:'700',
    top:-110,
    left:150,
  },
  buttonStyle:{
    marginTop:50,
  },
});
