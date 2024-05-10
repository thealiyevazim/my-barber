import { Ionicons } from "@expo/vector-icons";
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
import { MainInfoCardType } from "~types";
import { colors, windowHeight, windowWidth } from "~utils";
import { AppText } from "../AppText";

type Props = {
  mainCardInfoData: MainInfoCardType[];
  handleCardPress: (card: MainInfoCardType) => void;
};

export const MainInfoCard: React.FC<Props> = ({
  handleCardPress,
  mainCardInfoData,
}) => {
  const handleShowAll = useCallback(() => {}, []);

  const renderItem: ListRenderItem<MainInfoCardType> = useCallback(
    ({ item, index }) => {
      return (
        <View style={styles.cardContainer} key={index}>
          <Shadow distance={6} startColor="#efefef">
            <View style={styles.cardInner}>
              <Image source={{ uri: item.img }} style={styles.cardImage} />
              <View style={styles.cardOpenRow}>
                <AppText
                  style={[
                    styles.cardOpen,
                    { color: item.isOpen ? colors.appGreen : colors.appRed },
                  ]}
                >
                  {item.isOpen ? "Ochiq" : "Yopiq"}
                </AppText>
                <View style={styles.dot} />
                <AppText style={[styles.cardOpen, { color: colors.iconGray }]}>
                  {item.timeRange}
                </AppText>
              </View>
              <AppText style={styles.cardName}>{item.name}</AppText>
              <View style={styles.rating}>
                <Ionicons
                  size={18}
                  name="location-outline"
                  color={colors.iconGray}
                />
                <AppText style={styles.ratingText}>{item.distance} km</AppText>
              </View>
              <Pressable
                style={styles.bookNow}
                onPress={() => handleCardPress(item)}
              >
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
    <View style={styles.container}>
      <View style={styles.headerComp}>
        <AppText bold style={styles.title}>
          Eng yaqinlari
        </AppText>
        <Pressable onPress={handleShowAll}>
          <AppText style={styles.showAll}>Barchasi</AppText>
        </Pressable>
      </View>
      <FlatList
        horizontal
        data={mainCardInfoData}
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
    padding: 5,
    marginRight: 15,
  },
  cardInner: {
    padding: 8,
    borderRadius: 8,
    width: windowWidth / 2.2,
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
