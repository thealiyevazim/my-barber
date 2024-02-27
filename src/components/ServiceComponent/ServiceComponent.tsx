import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";
import { palette } from "~utils/theme";
// ----- SVG ----- //
import TopDirectionArrow from "~assets/icons/TopSideArrow";
import BottomDirectionArrow from "~assets/icons/BottomSideArrow";
import { ViewStyle } from "react-native";

interface Option {
  label: string;
  value: string;
  price?: any;
}


const ServiceComponent: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [priceValue, setPriceValue] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const options: Option[] = [
    { label: "Shaving", value: "shaving", price: "80 000" },
    { label: "Haircut", value: "haircut", price: "50 000" },
    { label: "Styling", value: "styling", price: "100 000" },
    { label: "Coloring", value: "coloring", price: "50 000" },
    { label: "Hairdryer", value: "hairdryer", price: "25 000" },
  ];

  const handleInputChange = (value: string) => {
    setSearchValue(value);
    // setPriceValue(value);
    setDropdownVisible(true);
  };
  const handleInputPriceChange = (value: string) => {
    // setSearchValue(value);
    setPriceValue(value);
    setDropdownVisible(true);
  };

  const handleInputPress = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
    setSearchValue(option.label);
    setPriceValue(option.price);
    setDropdownVisible(false);
  };

  const renderOptionItem = ({ item }: { item: Option }) => (
    <TouchableOpacity
      style={styles.optionItem}
      onPress={() => handleOptionSelect(item)}
    >
      <View style={styles.labelPriceContainer}>
        <Text style={styles.labelStyle}>{item.label}</Text>
        <Text style={styles.priceStyle}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleInputPress} style={styles.inputBox}>
        <TextInput
          style={styles.input}
          value={searchValue}
          onChangeText={handleInputChange}
          placeholder="Shaving"
          editable={false}
        />
        <View style={styles.rightArrowContainer}>
          <TextInput
            style={styles.priceShowBox}
            onChangeText={handleInputPriceChange}
            value={priceValue}
            placeholder="80 000"
            editable={false}
          />
          {!dropdownVisible ? <TopDirectionArrow color="#181818" /> : <BottomDirectionArrow color="#181818" />}
        </View>
      </TouchableOpacity>

      {dropdownVisible && (
        <View style={styles.dropdownContainer}>
          <FlatList
            data={options}
            renderItem={renderOptionItem}
            keyExtractor={(item) => item.value}
            contentContainerStyle={styles.flatListContent}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1,
  },
  input: {
    width: 87,
    height: 23,
    textAlign: "left",
    color: palette.mainBlack,
    fontSize: 18,
    fontWeight: "500",
  },
  dropdownContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    elevation: 2,
    marginTop: 55
  },
  flatListContent: {
    backgroundColor: palette.backWhite,
    borderRadius: 4,
    marginTop: 2,
  },
  optionItem: {
    flexDirection: "column",
    paddingHorizontal: 10,
    marginVertical: 5,

  },
  selectedText: {
    fontSize: 18,
  },
  labelStyle: {
    color: palette.mainBlack,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  priceStyle: {
    fontSize: 14,
    fontWeight: '500',
    color: palette.mainBlack,
  },
  labelPriceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    height: 28,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    width: "100%",
    height: 52,
    borderRadius: 4,
    backgroundColor: palette.backWhite,
  },
  rightArrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,

  },
  priceShowBox: {
    width: 71,
    height: 30,
    borderRadius: 4,
    backgroundColor: palette.labelGray,
    textAlign: 'center',
    verticalAlign: 'middle',
    color: palette.mainBlack,
    fontSize: 14,
    fontWeight: '400',
  },
});

export default ServiceComponent;
