import { Ionicons } from "@expo/vector-icons";
import React, { useCallback, useEffect } from "react";
import {
  FlatList,
  Image,
  ListRenderItem,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Shadow } from "react-native-shadow-2";
import { AppText } from "~components";
import { SafeAreaTemplate } from "~templates";
import { colors, windowHeight, windowWidth } from "~utils";
import { GoBackIcon } from '~assets/icons';
import { Barber, useTypedNavigation } from "~shared";
import { barbersData, useAppDispatch, useBarbersData } from "~store";
import { Routes } from "~navigation";

export const AllBarberScreen: React.FC = () => {
  const { goBack } = useTypedNavigation();
  const dispatch = useAppDispatch();
  const barbers = useBarbersData().map((barber) => ({
    ...barber,
    avatar: barber.avatar || "",
  })) as Barber[];
  const { navigate } = useTypedNavigation<"client">();


  useEffect(() => {
    dispatch(barbersData());
  }, [dispatch]);

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const renderItem: ListRenderItem<Barber> = useCallback(
    ({ item, index }) => {

      const handleBooked = () => {
        navigate(Routes.bookedScreen)
      }

      return (
        <View style={styles.cardContainer} key={index}>
          <Shadow distance={6} startColor="#efefef">
            <View style={styles.cardInner}>
              <Image source={{ uri: item?.avatar }} style={styles.cardImage} />
              <View style={styles.cardOpenRow}>
                {/* <AppText
                  style={[
                    styles.cardOpen,
                    { color: item.isOpen ? colors.appGreen : colors.appRed },
                  ]}
                >
                  {item.isOpen ? "Ochiq" : "Yopiq"}
                </AppText> */}
                <View style={styles.dot} />
                <AppText style={[styles.cardOpen, { color: colors.iconGray }]}>
                  {item.working_hours}
                </AppText>
              </View>
              <AppText style={styles.cardName}>{item.full_name}</AppText>
              <View style={styles.rating}>
                <Ionicons
                  size={18}
                  name="location-outline"
                  color={colors.iconGray}
                />
                <AppText style={styles.ratingText}>{item.location} km</AppText>
              </View>
              <Pressable style={styles.bookNow} onPress={handleBooked}>
                <AppText style={{ color: colors.white }}>Book now</AppText>
              </Pressable>
            </View>
          </Shadow>
        </View>
      );
    },
    []
  );

  return (
    <SafeAreaTemplate style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.7} onPress={handleGoBack}>
          <GoBackIcon style={styles.icon} stroke={colors.appBlack} />
        </TouchableOpacity>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <AppText semibold style={styles.headerTitle}>
            Barbers
          </AppText>
        </View>
      </View>
      <FlatList
        data={barbers}
        renderItem={renderItem}
        persistentScrollbar={true}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </SafeAreaTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    // Styles for container
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 30,
    marginBottom: 20,
  },
  headerTitle: {
    alignSelf: "center",
    fontSize: 22,
  },
  icon: {
    transform: [{ rotate: "180deg" }],
  },
  cardContainer: {
    padding: 5,
    marginRight: 15,
  },
  cardInner: {
    padding: 8,
    borderRadius: 8,
    width: windowWidth / 2.4,
    height: windowHeight / 3.5,
    backgroundColor: colors.white,
    justifyContent: "space-between",
  },
  cardImage: {
    height: "50%",
    borderRadius: 6,
    resizeMode: "cover",
  },
  cardOpenRow: {
    width: "75%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardOpen: {
    fontSize: 12,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 100,
    backgroundColor: colors.appBlack,
  },
  cardName: {
    fontSize: 16,
  },
  rating: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  ratingText: {
    fontSize: 12,
    color: colors.iconGray,
  },
  bookNow: {
    height: "15%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.appBlack,
  },
});

export default AllBarberScreen;
