import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { palette } from "~utils/theme";

interface TimeData {
  time: string;
}

interface Period {
  period: string;
}

const CustomTimePicker: React.FC = () => {

  const [searchValue, setSearchValue] = useState<string>("1 : 00");
  const [selectedTimeData, setSelectedTimeData] = useState<TimeData | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>("AM");
  const [selectedPeriod, setSelectedPeriod] = useState<Period | null>(null);
  const [dropdownPeriod, setDropdownPeriod] = useState<boolean>(false);


  const timeData: TimeData[] = [
    { time: "1 : 00" }, { time: "1 : 30" }, { time: "2 : 00" }, { time: "2 : 30" }, { time: "3 : 00" },
    { time: "3 : 30" }, { time: "4 : 00" }, { time: "4 : 30" }, { time: "5 : 00" }, { time: "5 : 30" },
    { time: "6 : 00" }, { time: "6 : 30" }, { time: "7 : 00" }, { time: "7 : 30" }, { time: "8 : 00" },
    { time: "8 : 30" }, { time: "9 : 00" }, { time: "9 : 30" }, { time: "10 : 00" }, { time: "10 : 30" },
    { time: "11 : 00" }, { time: "11 : 30" }, { time: "12 : 00" }, { time: "12 : 30" },
  ];

  const periodTime: Period[] = [
    { period: "AM" },
    { period: "PM" }
  ]

  const handleInputPress = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const handlePeriodPress = () => {
    setDropdownPeriod(!dropdownPeriod);
  };

  const handleOptionSelect = (timeData: TimeData) => {
    setSelectedTimeData(timeData);
    setSearchValue(timeData.time);
    setDropdownVisible(false);
  };

  const handlePeriodSelect = (periodTime: Period) => {
    setSelectedPeriod(periodTime);
    setPeriod(periodTime.period);
    setDropdownPeriod(false);
  };

  const renderTimeItem = ({ item }: { item: TimeData }) => (
    <TouchableOpacity
      style={styles.optionItem}
      onPress={() => handleOptionSelect(item)}
    >
      <View style={styles.labelContainer}>
        <Text style={styles.labelStyle}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderPeriodItem = ({ item }: { item: Period }) => (
    <TouchableOpacity
      style={styles.optionItem}
      onPress={() => handlePeriodSelect(item)}
    >
      <View style={styles.labelContainer}>
        <Text style={styles.labelStyle}>{item.period}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <View style={styles.horzantal}>
        <TouchableOpacity onPress={handleInputPress} style={styles.inputBox}>
          <Text style={styles.input}>{searchValue}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePeriodPress} style={styles.inputBox}>
          <Text style={styles.input}>{period}</Text>
        </TouchableOpacity>
      </View>
      {dropdownVisible && (
        <View style={styles.dropdownContainer}>
          <FlatList
            data={timeData}
            renderItem={renderTimeItem}
            keyExtractor={(item) => item.time}
            contentContainerStyle={styles.flatListContent}
            style={styles.flatList}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
      {dropdownPeriod && (
        <View style={styles.dropdownPeriodContainer}>
          <FlatList
            data={periodTime}
            renderItem={renderPeriodItem}
            keyExtractor={(item) => item.period}
            contentContainerStyle={styles.flatListContent}
            style={styles.flatList}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  horzantal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  inputBox: {
    alignItems: 'center',
    justifyContent: "center",
    width: 165,
    borderRadius: 4,
    backgroundColor: palette.backWhite,
    paddingVertical: 10
  },
  input: {
    color: palette.mainBlack,
    fontSize: 18,
    fontWeight: "500",
  },
  dropdownContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 4,
    elevation: 4,
    marginTop: -60
  },
  dropdownPeriodContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 4,
    elevation: 4,
    marginTop: -20
  },
  flatListContent: {
    backgroundColor: palette.backWhite,
    borderRadius: 4,
    width: 165,
  },
  flatList: {
    height: 150,
  },
  optionItem: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },
  labelStyle: {
    color: palette.mainBlack,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    height: 28,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
});

export default CustomTimePicker;
