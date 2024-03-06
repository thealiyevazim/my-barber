import { useNavigation } from "@react-navigation/native";
import { Camera, CameraType } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import * as MediaLibrary from "expo-media-library";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Modal from "react-native-modal";
import { Button, Container, Input, Text } from "~components";
import { palette } from "~utils/theme";
// ----- IMG ----- //
const HeaderImage = require("../../assets/images/HeaderIMage.png");
const LightCamera = require("../../assets/images/Camera_light.png");
const Gallery = require("../../assets/images/MyCamera.png");
const CameraIcon = require("../../assets/images/cameraCircle.png");
// ----- SVG ----- //
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import LocationIcon from "~assets/icons/LocationIcon";
import { GOOGLE_MAPS_API_KEY } from "~config/constants";

const { height: windowHeight } = Dimensions.get("window");

interface LocationCoordinates {
  latitude: number;
  longitude: number;
}
const { height, width } = Dimensions.get("window");

const EditProfileData: React.FC = () => {
  // marker properties //
  const [markersList, setMarkersList] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [address, setAddress] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] =
    useState<LocationCoordinates | null>(null);
  const [openInput, setOpenInput] = useState(true);
  // const showInput = useState(true)
  const [showInput, setShowInput] = useState(true);

  // ------- select map location addrs functions ------- //
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      const { latitude, longitude } = location.coords;

      let addressResponse = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      if (addressResponse.length > 0) {
        let { district, street, name } = addressResponse[0];
        setAddress(`${street} ${name}, ${district}`);
      }
    })();
  }, []);

  const handleMapRegionChange = async (region: LocationCoordinates) => {
    const { latitude, longitude } = region;

    try {
      let addressResponse = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      if (addressResponse.length > 0) {
        let { district, street, name } = addressResponse[0];
        setAddress(`  ${district},${street} ${name}`);
        setSelectedLocation({
          latitude,
          longitude,
        });
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleCloseModal = () => {
    if (selectedLocation) {
      setLocation({
        coords: {
          latitude: selectedLocation.latitude,
          longitude: selectedLocation.longitude,
        },
      });
    }
    handleExportAddress();
    setLocationModalVisible(false);
    setShowInput(false);
  };

  const handleExportAddress = () => {
    console.log("Address:", address);
  };

  const [mapRegion, setMapRegion] = useState({
    latitude: 41.32831126787846,
    latitudeDelta: 0.5677638700757441,
    longitude: 69.24751281738281,
    longitudeDelta: 0.3291258215904236,
  });

  const navigation = useNavigation();
  const [image, setImage] = useState("");
  const [hasGalleryPermission, setHasGalleryPermission] = useState(false);
  const [isMOdalVisible, setIsModalVisible] = useState(false);
  const [locationMdalVisible, setLocationModalVisible] = useState(false);
  // const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const CameraRef = useRef(null);

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  // ------ Camera Permission ------- //

  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestCameraPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");

      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }

    if (hasGalleryPermission === false) {
      return <Text>No access storage</Text>;
    }
  };

  return (
    <Container style={styles.mainContainer}>
      {/*  header image */}
      <Image source={HeaderImage} style={styles.headerImageStyle} />
      <Container style={styles.whiteRoundedContainer}>
        <Container style={styles.whiteInnerContainer}>
          <TouchableOpacity
            style={styles.cameraPressOpacity}
            // press Camera change avatar photo //
            onPress={() => pickImage()}
          >
            <View style={styles.imageOutlineView}>
              <View style={styles.imageInnerView}>
                {image && (
                  <Image
                    source={{ uri: image }}
                    style={styles.sourseImageStyle}
                  />
                )}
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.inputViewFirst}>
            <Input
              placeholder="Ism"
              borderWidth={0}
              borderColor={"transparent"}
              margin={0}
              secureTextEntry={false}
            />
          </View>

          <View style={styles.inputView}>
            <Input
              placeholder="Familya"
              borderWidth={0}
              borderColor={"transparent"}
              margin={0}
              secureTextEntry={false}
            />
          </View>

          <View style={styles.inputView}>
            <Input
              placeholder="Telefon raqam"
              borderWidth={0}
              borderColor={"transparent"}
              margin={0}
              secureTextEntry={false}
            />
          </View>

          <View style={styles.inputView}>
            <Input
              placeholder="E-mail"
              borderWidth={0}
              borderColor={"transparent"}
              margin={0}
              secureTextEntry={false}
            />
          </View>

          <View style={styles.inputLocationView}>
            {showInput ? (
              <Input
                placeholder="Ishlash manzili"
                borderWidth={0}
                borderColor={"transparent"}
                margin={0}
                secureTextEntry={false}
              />
            ) : (
              <Text style={styles.newText}>{address}</Text>
            )}

            <TouchableOpacity
              style={styles.locationIconStyle}
              onPress={() => setLocationModalVisible(true)}
              hitSlop={{ left: 20, right: 20, bottom: 20, top: 20 }}
            >
              <LocationIcon
                width={25}
                height={25}
                fill={palette.mainBlack}
                stroke={palette.mainBlack}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.inputView}>
            <Input
              placeholder="Tug'ilgan sana"
              borderWidth={0}
              borderColor={"transparent"}
              margin={0}
              secureTextEntry={false}
            />
          </View>

          <View style={styles.inputView}>
            <Input
              placeholder="Ish vaqti"
              borderWidth={0}
              borderColor={"transparent"}
              margin={0}
              secureTextEntry={false}
            />
          </View>

          <Text>{address}</Text>

          <Button
            text={"Saqlash"}
            textColor={palette.white}
            fontWeight={"bold"}
            // onPress={goNextPage}
            style={styles.saveButton}
            onPress={() => navigation.navigate}
          />
        </Container>
      </Container>
      <Modal
        isVisible={locationMdalVisible}
        style={{ width: "90%", height: windowHeight / 2, flex: 1 }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.googleSearchContainer}>
            <GooglePlacesAutocomplete
              placeholder="Search"
              onPress={(data, details = null) => {
                console.log(data, details);
              }}
              query={{
                key: GOOGLE_MAPS_API_KEY,
                language: "en",
              }}
            />
          </View>
          {selectedLocation && (
            <Marker
              coordinate={{
                latitude: selectedLocation.latitude,
                longitude: selectedLocation.longitude,
              }}
              draggable
              onDragEnd={(e) => handleMapRegionChange(e.nativeEvent.coordinate)}
              title="Marker"
              description="Mening Hozirgi joylashuvim"
            />
          )}
          {location && (
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              showsUserLocation
              showsMyLocationButton
              initialRegion={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              onPress={(e) => handleMapRegionChange(e.nativeEvent.coordinate)}
            />
          )}
          <View style={styles.coupleButton}>
            <TouchableOpacity
              style={styles.closeLocationButton}
              onPress={handleCloseModal}
            >
              <Text style={styles.buttonText}>Joylashuvni tanlash</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Container>
  );
};

export default EditProfileData;

const styles = StyleSheet.create({
  googleSearchContainer: {
    // zIndex:1,
  },
  closeLocationButton: {
    borderRadius: 5,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: palette.mainBlack,
  },

  determineLocationButton: {
    backgroundColor: palette.mainBlack,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  coupleButton: {
    width: "100%",
    alignSelf: "center",
  },
  newText: {
    color: palette.mainBlack,
    fontSize: 12,
    marginLeft: 5,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalContainer: {
    backgroundColor: palette.backWhite,
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-between",
  },
  map: {
    width: "100%",
    height: "80%",
    borderRadius: 10,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  addresText: {
    color: "red",
  },
  violentText: {
    color: "red",
  },
  dottedStyle: {
    width: 45,
    height: 45,
    backgroundColor: "red",
    marginBottom: -50,
  },
  locationIconStyle: {
    marginRight: 10,
  },
  mapBox: {
    flex: 1,
    width: 314,
    marginVertical: 5,
  },
  locationButton: {
    width: "90%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: palette.mainBlack,
    bottom: 10,
    position: "absolute",
  },
  locationText: {
    color: palette.backWhite,
    fontSize: 22,
    fontWeight: "700",
  },
  saveButton: {
    backgroundColor: palette.mainBlack,
    borderRadius: 8,
    height: 60,
    padding: 14,
    gap: 10,
    marginTop: 15,
  },
  inputView: {
    alignItems: "flex-start",
    borderColor: palette.gray,
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 10,
  },
  inputViewFirst: {
    alignItems: "flex-start",
    borderColor: palette.gray,
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 10,
    marginTop: 65,
  },
  sourseImageStyle: {
    width: 79,
    height: 79,
    borderRadius: 50,
    resizeMode: "cover",
    position: "absolute",
  },
  cameraPressOpacity: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageOutlineView: {
    width: 89,
    height: 89,
    backgroundColor: palette.lightGray,
    borderRadius: 50,
    position: "absolute",
    bottom: -44,
  },
  imageInnerView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  whiteInnerContainer: {
    marginHorizontal: 16,
    flex: 1,
  },
  whiteRoundedContainer: {
    flex: 1,
    width: "100%",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: palette.white,
  },
  headerImageStyle: {
    marginTop: 46,
    marginBottom: 40,
    resizeMode: "cover",
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: palette.mainBlack,
  },
  // modal styles //
  modalViewStyle: {
    flex: 1,
    width: "100%",
    backgroundColor: palette.lightGray,
    flexDirection: "row",
    padding: 60,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    borderWidth: 1,
    borderColor: palette.gray,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    gap: 15,
  },
  modalCloseButtonStyle: {
    backgroundColor: palette.mainBlack,
    borderRadius: 8,
    height: 40,
    padding: 10,
    width: 70,
    gap: 10,
    position: "absolute",
    right: 15,
    top: 15,
  },
  galleryImageButtonStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    gap: 10,
  },
  imagePressContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  modalImageStyle: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  onCameraText: {
    color: palette.mainBlack,
    fontWeight: "900",
  },
  closeText: {
    fontWeight: "800",
    color: palette.white,
  },
  inputLocationView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: palette.gray,
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 10,
    // paddingHorizontal: 7,
    height: 50,
  },
  locationIcon: {
    width: 15,
    height: 15,
  },
  locationModalBody: {
    flex: 1,
    backgroundColor: palette.backWhite,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
});
