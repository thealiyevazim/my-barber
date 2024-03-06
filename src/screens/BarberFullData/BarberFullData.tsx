import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import React, { useState, useCallback, useRef, useEffect } from "react";
import { palette } from "~utils/theme";
import { Container, Text, Button, Input } from "~components";
import * as ImagePicker from "expo-image-picker";
import { Camera, CameraType } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";
import { Archtype } from "immer/dist/internal";
import { useNavigation } from "@react-navigation/native";

const HeaderImage = require("../../assets/images/HeaderIMage.png");
const LightCamera = require("../../assets/images/Camera_light.png");
const Gallery = require("../../assets/images/MyCamera.png");
const CameraIcon = require("../../assets/images/cameraCircle.png");

const BarberFullData = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  // const [status, requestPermission] = ImagePicker.useCameraPermissions();
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [isMOdalVisible, setIsModalVisible] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  // const [type,setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const CameraRef = useRef(null);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

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

  const goNextPage = () => {
    navigation.navigate("BarberProfileData");
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
            onPress={() => setIsModalVisible(true)}
          >
            <View style={styles.imageOutlineView}>
              <View style={styles.imageInnerView}>
                {/* <Image 
            source={LightCamera}
            style={{
              height:32,
              width:32,
              resizeMode:'contain',
              position:'absolute'
            }}
          /> */}
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

          <View style={styles.inputView}>
            <Input
              placeholder="Ishlash manzili"
              borderWidth={0}
              borderColor={"transparent"}
              margin={0}
              secureTextEntry={false}
            />
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

          <Button
            text={"Saqlash"}
            textColor={palette.white}
            fontWeight={"bold"}
            onPress={goNextPage}
            style={styles.saveButton}
          ></Button>
        </Container>
      </Container>

      {/* MODAL section  */}
      <Modal
        visible={isMOdalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        //  presentationStyle='pageSheet'
        transparent={true}
        style={{}}
      >
        <View style={styles.modalViewStyle}>
          <TouchableOpacity
            style={styles.modalCloseButtonStyle}
            onPress={() => setIsModalVisible(false)}
          >
            <Text style={styles.closeText}>Chiqish</Text>
          </TouchableOpacity>
          <View style={styles.galleryImageButtonStyle}>
            {/* Camera touchable part */}
            <TouchableOpacity style={styles.imagePressContainer}>
              <Image source={CameraIcon} style={styles.modalImageStyle} />
              <Text style={styles.onCameraText}>CAMERA</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.imagePressContainer}
              onPress={() => pickImage()}
              // onPress={savePhoto}
            >
              <Image source={Gallery} style={styles.modalImageStyle} />
              <Text style={styles.onCameraText}>GALIREYA</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Container>
  );
};

export default BarberFullData;

const styles = StyleSheet.create({
  saveButton: {
    backgroundColor: palette.mainBlack,
    borderRadius: 8,
    height: 60,
    padding: 14,
    gap: 10,
    marginTop: 25,
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
    width: 79,
    height: 79,
    backgroundColor: palette.lightGray,
    borderRadius: 50,
    position: "absolute",
    bottom: -39,
  },
  imageInnerView: {
    alignItems: "center",
    flex: 1,
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
    width: "100%",
    height: "35%",
    backgroundColor: palette.lightGray,
    padding: 60,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    borderWidth: 1,
    borderColor: palette.gray,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    flexDirection: "row",
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
    color: "#067fd0",
    fontWeight: "900",
  },
  closeText: {
    fontWeight: "800",
    color: palette.white,
  },
});
