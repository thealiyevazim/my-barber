import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, FlatList, StyleSheet, StyleProp, ViewStyle } from "react-native";
import BottomDropdownSelect from "~components/BottomDropdownComponent/BottomDropDownSelection";
import { TitleComponent } from "~components/TitleComponent";
import { palette } from "~utils/theme";

interface Option {
  label: string;
  value: string;
}

type Props = {
  style?: ViewStyle

}

const TimeDropDownSelect: React.FC<Props> = ({ style }) => {

  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const options: Option[] = [
    { label: "8:00", value: "8:00" },
    { label: "8:30", value: "8:30" },
    { label: "9:00", value: "9:00" },
    { label: "9:30", value: "9:30" },
    { label: "10:00", value: "10:00" },
    { label: "10:30", value: "10:30" },
    { label: "11:00", value: "11:00" },
    { label: "11:30", value: "11:30" },
    { label: "12:00", value: "12:00" },
    { label: "12:30", value: "12:30" },
    { label: "13:00", value: "13:00" },
    { label: "13:30", value: "13:30" },
    { label: "14:00", value: "14:00" },
    { label: "14:30", value: "14:30" },
    { label: "15:00", value: "15:00" },
    { label: "15:30", value: "15:30" },
    { label: "16:00", value: "16:00" },
    { label: "16:30", value: "16:30" },
    { label: "17:00", value: "17:00" },
    { label: "17:30", value: "17:30" },
    { label: "18:00", value: "18:00" },
    { label: "18:30", value: "18:30" },
    { label: "19:00", value: "19:00" },
    { label: "19:30", value: "19:30" },
    { label: "20:00", value: "20:00" },
    { label: "20:30", value: "20:30" },
    { label: "21:00", value: "21:00" },
    { label: "21:30", value: "21:30" },
    { label: "22:00", value: "22:00" },
    { label: "22:30", value: "22:30" },
    { label: "23:00", value: "23:00" },
  ];

  const handleInputChange = (value: string) => {
    setSearchValue(value);
    setDropdownVisible(true);
  };

  const handleInputPress = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
    setSearchValue(option.label);
    setDropdownVisible(false);
  };

  const renderOptionItem = ({ item }: { item: Option }) => (
    <TouchableOpacity style={styles.optionItem} onPress={() => handleOptionSelect(item)}>
      <Text style={styles.labelStyle}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <TitleComponent title='Vaqtni tanlash' size />
      <View>
        <View style={[styles.container, style]}>
          <TouchableOpacity onPress={handleInputPress}>
            <TextInput
              style={styles.input}
              value={searchValue}
              onChangeText={handleInputChange}
              placeholder="11:30"
              editable={false}
            />
          </TouchableOpacity>

          {dropdownVisible && (
            <FlatList
              data={options}
              renderItem={renderOptionItem}
              keyExtractor={(item) => item.value}
              style={styles.dropdown}
            />
          )}
        </View>
        <BottomDropdownSelect />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // justifyContent: "center",
    // position:'relative',
  },
  input: {
    width: 140,
    height: 42,
    borderRadius: 4,
    backgroundColor: palette.backWhite,
    textAlign: "center",
    color: palette.mainBlack,
    fontSize: 18,
    fontWeight: '500',

  },
  dropdown: {
    height: 200,
    width: 140,
    backgroundColor: palette.backWhite,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    color: palette.totalGray,
  },
  optionItem: {
    // padding: 10,
  },
  selectedText: {
    fontSize: 18,
  },
  labelStyle: {
    color: palette.totalGray,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
  },
});

export default TimeDropDownSelect;