import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { AppText, BottomComponent } from "~components";
import { SafeAreaTemplate } from "~templates";
import { colors, windowHeight } from "~utils";
import {
  ArrowLeftIcon,
  EditIcon,
  HistoryIcon,
  LanguageIcon,
  LogOutIcon,
} from "~assets/icons";
import Modal from "react-native-modal";

interface ProfileComponentProps {
  name?: string;
  avatar?: string;
  customerNumber?: string;
  logOutPress?: () => void;
  goEditPress?: () => void;
  goToLanguage?: () => void;
}

export const ProfileComponent: React.FC<ProfileComponentProps> = ({
  name,
  avatar,
  customerNumber,
  logOutPress,
  goEditPress,
  goToLanguage,
}) => {
  const [openLogOut, setOpenLogOut] = useState<boolean>(false);

  return (
    <SafeAreaTemplate isDark>
      <View style={styles.profileWrapper}>
        <View style={styles.profileAvatarWrapper}>
          <Image
            style={styles.profileAvatar}
            source={{
              uri: avatar,
            }}
          />
          <Pressable style={styles.editButton} onPress={goEditPress}>
            <EditIcon />
          </Pressable>
        </View>
        <AppText style={styles.name}>{name}</AppText>
        <AppText style={styles.customerNumber}>
          {customerNumber}
        </AppText>
      </View>
      <BottomComponent bottomStyles={styles.container}>
        <View style={styles.settingsWrapper}>
          <TouchableOpacity style={styles.buttonWrapper} onPress={goToLanguage}>
            <View style={styles.iconWrapper}>
              <LanguageIcon />
              <AppText style={styles.buttonTitle}>
                Language
              </AppText>
            </View>
            <View style={styles.iconWrapper}>
              <AppText style={styles.value}>
                English
              </AppText>
              <ArrowLeftIcon stroke={colors.appBlack} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonWrapper}>
            <View style={styles.iconWrapper}>
              <HistoryIcon />
              <AppText style={styles.buttonTitle}>
                History
              </AppText>
            </View>
            <View style={styles.iconWrapper}>
              <ArrowLeftIcon stroke={colors.appBlack} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logOutWrapper}
            onPress={() => setOpenLogOut(true)}
          >
            <LogOutIcon />
            <AppText style={styles.buttonTitle}>
              Log out
            </AppText>
          </TouchableOpacity>
        </View>
      </BottomComponent>
      <Modal
        isVisible={openLogOut}
        onBackdropPress={() => setOpenLogOut(false)}
        style={styles.modalView}
      >
        <View style={styles.modalBox}>
          <AppText style={styles.modalTitle}>Ilovadan chiqish</AppText>
          <AppText style={styles.description}>
            Barbershop ilovasidan chiqishga ishonchingiz komilmi?
          </AppText>
          <View style={styles.buttonBox}>
            <TouchableOpacity
              style={styles.noButton}
              onPress={() => setOpenLogOut(false)}
            >
              <AppText style={{ color: colors.white }}>Yo'q</AppText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.yesButton} onPress={logOutPress}>
              <AppText style={{ color: colors.white }}>Ha</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    bottom: "-10%",
    height: windowHeight / 2 + 60,
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileWrapper: {
    marginTop: 40,
  },
  name: {
    color: colors.white,
    fontSize: 25,
    marginTop: 10,
  },
  customerNumber: {
    color: colors.white,
    fontSize: 16,
    marginTop: 6,
  },
  editButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    zIndex: 3
  },
  profileAvatarWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  settingsWrapper: {
    rowGap: 24,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonTitle: {
    fontSize: 20,
    marginLeft: 12,
  },
  value: {
    fontSize: 14,
    color: colors.iconGray,
    marginRight: 12,
  },
  logOutWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "35%",
  },
  modalBox: {
    paddingVertical: 20,
    width: "100%",
    borderRadius: 8,
    backgroundColor: colors.white,
    flexDirection: "column",
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  modalTitle: {
    fontWeight: "600",
    fontSize: 18,
    alignSelf: "center",
    marginBottom: 15,
  },
  description: {
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "400",
    color: colors.appGray,
    width: 250,
  },
  buttonBox: {
    flexDirection: "row",
    paddingHorizontal: 60,
    marginTop: 40,
    justifyContent: "space-between",
  },
  noButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: colors.appGray,
  },
  yesButton: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: colors.appBlack,
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
