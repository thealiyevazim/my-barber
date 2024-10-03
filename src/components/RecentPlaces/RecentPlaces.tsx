import { AntDesign, Ionicons } from "@expo/vector-icons";
import React, { useCallback } from "react";
import {
  FlatList,
  Image,
  ListRenderItem,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { Shadow } from "react-native-shadow-2";
import { AppText } from "~components/AppText";
import { Routes } from "~navigation";
import { Barber, useTypedNavigation } from "~shared";
import { useBarbersData } from "~store";
import { colors, windowWidth } from "~utils";

type Props = {
  handleCardPress: () => void;

};

export const RecentPlaces: React.FC<Props> = ({
  handleCardPress,
}) => {
  const { navigate } = useTypedNavigation<"client">();
  const barbers = useBarbersData().map((barber) => ({
    ...barber,
    avatar: barber.avatar || "",
  })) as Barber[];

  const handleShowAll = useCallback(() => {
    navigate(Routes.allBarberScreen)
  }, []);

  const renderItem: ListRenderItem<Barber> = useCallback(
    ({ item, index }) => {
      return (
        <Pressable onPress={handleCardPress}>
          <Shadow distance={6} startColor="#efefef">
            <View style={styles.cardContainer}>
              <Image source={{ uri: item?.avatar }} style={styles.cardImage} />
              <View style={styles.cardDetails}>
                <AppText semibold style={styles.cardName}>
                  {item.full_name}
                </AppText>
                <View style={styles.rating}>
                  <AntDesign name="star" size={18} color="gold" />
                  {/* <AppText> {item.rating}/5</AppText> */}
                </View>
                <View style={styles.rating}>
                  <Ionicons name="location-outline" size={18} color="gray" />
                  <AppText>{item.location} km</AppText>
                </View>
              </View>
            </View>
          </Shadow>
        </Pressable>
      );
    },
    []
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerComp}>
        <AppText bold style={styles.title}>
          So'ngi tashriflar
        </AppText>
        <Pressable onPress={handleShowAll}>
          <AppText style={styles.showAll}>Barchasi</AppText>
        </Pressable>
      </View>
      <FlatList
        horizontal
        data={barbers.slice(-10).reverse()}
        style={{ padding: 4 }}
        renderItem={renderItem}
        persistentScrollbar={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 15,
  },
  headerComp: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    color: colors.appBlack,
  },
  showAll: {
    fontSize: 14,
    color: colors.iconGray,
  },
  cardContainer: {
    marginRight: 15,
    padding: 8,
    borderRadius: 6,
    width: windowWidth / 1.6,
    backgroundColor: colors.white,
    flexDirection: "row",
  },
  cardImage: {
    width: "30%",
    height: 80,
    borderRadius: 6,
    resizeMode: "cover",
  },
  cardName: {
    fontSize: 16,
    color: colors.appBlack,
  },
  rating: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  cardDetails: {
    marginLeft: 10,
    justifyContent: "space-between",
  },
});
