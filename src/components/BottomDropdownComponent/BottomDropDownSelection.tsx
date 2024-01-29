import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, FlatList, StyleSheet } from "react-native";
import { palette } from "~utils/theme";

interface Option {
  label: string;
  value: string;
}

const BottomDropdownSelect: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const options: Option[] = [
    { label: "AM", value: "AM" },
    { label: "PM", value: "PM" },
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
    <View style={styles.container}>
      <TouchableOpacity onPress={handleInputPress}>
        <TextInput
          style={styles.input}
          value={searchValue}
          onChangeText={handleInputChange}
          placeholder="AM"
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
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // justifyContent: "center",
  },
  input: {
    width: 162,
    height: 42,
    borderRadius: 4,
    backgroundColor: palette.backWhite,
    textAlign: "center",
    color:palette.mainBlack,
    fontSize:18,
    fontWeight:'500',

  },
  dropdown: {
    maxHeight: 80,
    width: 162,
    backgroundColor:palette.backWhite,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    color:palette.totalGray,
  },
  optionItem: {
    padding: 10,
  },
  selectedText: {
    fontSize: 18,
  },
  labelStyle:{
    color:palette.totalGray,
    textAlign:'center',
    fontSize:16,
    fontWeight:'400',
  },
});

export default BottomDropdownSelect;