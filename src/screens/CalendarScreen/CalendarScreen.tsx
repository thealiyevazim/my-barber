import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";
import { AppText, MainTopTabNavigation, MockTimeData } from "~components";
import { useAppSelector } from "~store";
import { SafeAreaTemplate } from "~templates";
import { colors } from "~utils";

// Function to generate the next 7 days starting from today
const generateNext7Days = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const next7Days = [];
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    next7Days.push({
      id: i + 1,
      day: days[date.getDay()],
      date: date.toLocaleDateString(),
    });
  }

  return next7Days;
};

export const CalendarScreen: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [dayData, setDayData] = useState(generateNext7Days());

  const handleDayPress = (day: string) => {
    setActiveButton(day);
  };

  const renderDayItem = ({
    item,
  }: {
    item: { id: number; day: string; date: string };
  }) => {
    const isActive = activeButton === item.day;

    return (
      <TouchableOpacity
        onPress={() => handleDayPress(item.day)}
        style={[styles.dayButton, isActive ? styles.activeButton : null]}
      >
        <AppText style={[styles.dayTitle, isActive ? styles.activeText : null]}>
          {item.day}
        </AppText>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    setDayData(generateNext7Days());
  }, []);

  return (
    <SafeAreaTemplate>
      <AppText semibold style={styles.title}>
        Schedule
      </AppText>
      <View style={styles.emptyPlace} />
      <MainTopTabNavigation />
      <View style={styles.emptyPlace} />
      <View style={styles.flatListContainer}>
        <FlatList
          data={dayData}
          renderItem={renderDayItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.dayWrapper}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.emptyPlace} />
        <MockTimeData time="09:00" />
        <MockTimeData time="10:00" bookTime />
      </View>
    </SafeAreaTemplate>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    alignSelf: "center",
  },
  emptyPlace: {
    height: 20,
  },
  flatListContainer: {},
  dayButton: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: colors.appGray,
    marginRight: 11,
    borderRadius: 8,
  },
  dayWrapper: {},
  dayTitle: {
    fontSize: 16,
  },
  activeButton: {
    backgroundColor: colors.appBlack,
  },
  activeText: {
    color: colors.white,
  },
});
