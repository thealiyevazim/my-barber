import React, { useState } from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from "react-native"
import { palette } from "~utils/theme";
import { useNavigation } from "@react-navigation/native";
// ------ SVG ------ //
import UserIcon from "~assets/icons/UserIcon";
import LanguageIcon from "~assets/icons/LanguageIcon";
import HistorySvgIcon from "~assets/icons/HistorySvg";
import LogOutIcon from "~assets/icons/LogOutIcon";
import RightBack from "~assets/icons/RightArrow";
import { AuthenticationRouteList } from "~navigation";
import Modal from "react-native-modal";

const ProfileIMage = require("../../assets/images/ProfileRoundedImage.png")

const ClientProfileData = () => {

  const navigation = useNavigation<AuthenticationRouteList>();
  const [logOut, setLogOut] = useState(false)

  const goNextPage = () => {
    navigation.navigate("languageScreen")
  };

  const goEditProfil = () => {
    navigation.navigate("clientEdit")
  }

  // const goHistoryScreen = () => {
  //   navigation.navigate("historyScreen")
  // }

  const openModal = () => {
    setLogOut(true)
  }

  const closeModal = () => {
    setLogOut(false)
  }

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor="transparent" />
      <View style={styles.topImageContainer}>
        <View style={styles.imageContainer}>
          <Image source={ProfileIMage} style={styles.profileImageStyle} />
        </View>
        <Text style={styles.bigText}>Azimjon Aliyev</Text>
      </View>
      <View style={styles.whiteCircleContainer}>
        <TouchableOpacity style={styles.topUserCOntainer} onPress={goEditProfil}>
          {/* svg */}
          <View style={styles.leftIconBox}>
            <UserIcon isFocused />
            <Text style={styles.iconText}>Profilni tahrirlash</Text>
          </View>
          {/* svg */}
          <RightBack color="#181818" width={20} height={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.topUserCOntainer} onPress={goNextPage}>
          {/* svg */}
          <View style={styles.leftIconBox}>
            <LanguageIcon />
            <Text style={styles.iconText}>Til</Text>
          </View>
          {/* svg */}
          <RightBack color="#181818" width={20} height={20} />
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.topUserCOntainer} onPress={goHistoryScreen}>
          <View style={styles.leftIconBox}>
            <HistorySvgIcon />
            <Text style={styles.iconText}>Tarix</Text>
          </View>
          <RightBack color={palette.mainBlack} width={20} height={20} />
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.topUserCOntainer} onPress={openModal}>
          {/* svg */}
          <View style={styles.leftIconBox}>
            <LogOutIcon />
            <Text style={styles.iconText}>Akkauntdan Chiqish</Text>
          </View>
          {/* svg */}
        </TouchableOpacity>
      </View>
      <Modal isVisible={logOut} style={styles.modal}>
        <View style={styles.modalBox}>
          <Text style={styles.modalTitle}>
            Ilovadan chiqish
          </Text>
          <Text style={styles.description}>
            Barbershop ilovasidan chiqishga
          </Text>
          <Text style={styles.description}>
            ishonchingiz komilmi?
          </Text>
          <View style={styles.buttonBox}>
            <TouchableOpacity style={styles.noButton} onPress={closeModal}>
              <Text style={{ color: palette.white }}>Yo'q</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.yesButton}>
              <Text style={{ color: palette.white }}>Ha</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ClientProfileData;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: palette.mainBlack,
    flexDirection: 'column',
    paddingTop: 45,
  },
  whiteCircleContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: palette.white,
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 16,
    paddingTop: 32,
    gap: 24,
  },
  topImageContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8,
    paddingHorizontal: 16,
  },
  imageContainer: {
    width: 79,
    height: 79,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: palette.lightGray,
  },
  bigText: {
    color: palette.mainWhite,
    fontSize: 22,
    fontWeight: '400',
  },
  middleGrayText: {
    fontSize: 14,
    fontWeight: '400',
    color: palette.labelGray,
  },
  profileImageStyle: {
    width: 79,
    height: 79,
    borderRadius: 50,
  },

  topUserCOntainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftIconBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconText: {
    fontSize: 18,
    fontWeight: '400',
    color: palette.mainBlack,
  },
  modal: {
    width: "90%",
  },
  modalBox: {
    paddingVertical: 20,
    width: "100%",
    borderRadius: 8,
    backgroundColor: palette.white,
    flexDirection: 'column',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  modalTitle: {
    fontWeight: "600",
    fontSize: 18,
    alignSelf: "center",
    marginBottom: 15
  },
  description: {
    alignSelf: "center",
    fontWeight: "400",
    color: palette.totalGray,
  },
  buttonBox: {
    flexDirection: "row",
    paddingHorizontal: 60,
    marginTop: 40,
    justifyContent: "space-between"
  },
  noButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: palette.totalGray
  },
  yesButton: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: palette.black
  }
});