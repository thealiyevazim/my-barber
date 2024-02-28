import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { palette } from "~utils/theme";
// ------ COMPONENTS ------ //
import { ServicesFlatList } from "~components/ServicesFlatLIst";
import { FaceFactoryComponent, HeaderTitleArrow, NextButton } from "~components";
import { AuthenticationRouteList } from "~navigation";

const SliderImage = require("../../assets/images/TopBlurImage.png")
const PlusImage = require("../../assets/images/countImage.png")

const BarbershopInformation = () => {

  const navigation = useNavigation<AuthenticationRouteList>();

  const goBack = () => {
    navigation.goBack();
  };

  const goNextPage = () => {
    navigation.navigate("bookingbarber")
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={SliderImage} style={styles.backImage} />
      <HeaderTitleArrow onPress={goBack} changeColor />
      <ScrollView style={styles.barberService}>
        <View style={styles.information}>
          <FaceFactoryComponent />
          <View style={styles.servicesFlatList}>
            <Text style={styles.mainText}>Services</Text>
            <ServicesFlatList />
          </View>
          <View style={styles.galleryContainer}>
            <Text style={styles.mainText}>Gallery</Text>
            <TouchableOpacity style={styles.touchableImage}>
              <Image source={PlusImage} style={styles.conutimageStyle} />
              <Text style={styles.plusText}>+3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nextButton}>
            <NextButton btnTitle="Next" handleClick={goNextPage} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BarbershopInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImage: {
    height: 257,
    width: "100%",
    resizeMode: "center",
    position: "absolute",
  },
  barberService: {
    width: "100%",
    backgroundColor: palette.mainWhite,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 12,
    marginTop: 150,
  },
  information: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: Platform.OS === "ios" ? 35 : 24
  },
  servicesFlatList: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10
  },
  mainText: {
    fontSize: 20,
    fontWeight: "600",
    color: palette.mainBlack,
  },
  galleryContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10
  },
  touchableImage: {
    width: "100%",
    height: 170,
    borderRadius: 8,
  },
  conutimageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'cover',
    zIndex: -1,
  },
  plusText: {
    zIndex: 1,
    color: palette.mainWhite,
    fontSize: 32,
    fontWeight: '700',
    top: -110,
    left: 150,
  },
  buttonStyle: {
    marginBottom: 20,
  },
  nextButton: {
    height: "10%",
    justifyContent: "flex-end",
    marginTop: Platform.OS === "ios" ? 10 : 0,
  }
});