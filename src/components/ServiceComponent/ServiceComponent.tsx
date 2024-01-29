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

interface Option {
  label: string;
  value: string;
  price?: string;
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
        {/* <Text style={styles.priceShowBox}>454554</Text> */}
        <TextInput 
         style={styles.priceShowBox}
         onChangeText={handleInputPriceChange}
         value={priceValue}
         placeholder="80 000"
         editable={false}
        />
            {!dropdownVisible ? <BottomDirectionArrow color="#181818" style={styles.arrowStyle}/> : <TopDirectionArrow color="#181818"/> }
        </View>
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
  container: {},
  input: {
    width: 87,
    height: 23,
 
    textAlign: "left",
    color: palette.mainBlack,
    fontSize: 18,
    fontWeight: "500",
  },
  dropdown: {
    height: 196,
    width: 332,
    backgroundColor: palette.backWhite,
    color: palette.totalGray,
    borderTopColor:'#EDEEF1',
    borderTopWidth:1,
    borderTopLeftRadius:4,
    borderTopRightRadius:4,
    // marginTop:-17,
  },
  optionItem: {
    flexDirection: "column",
    paddingHorizontal: 10,
    marginVertical:5,
    
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
    fontSize:14,
    fontWeight:'500',
    color:palette.mainBlack,
  },
  labelPriceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between',
    height:28,
    borderRadius:4,
    paddingHorizontal:10,
  },
  inputBox:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
    width: 332,
    height: 52,
    borderRadius: 4,
    backgroundColor: palette.backWhite,
  },
  rightArrowContainer:{
    flexDirection:'row',
    alignItems:'center',
    gap:10,

  },
  priceShowBox:{
    width:71,
    height:30,
    borderRadius:4,
    backgroundColor:palette.labelGray,
    textAlign:'center',
    verticalAlign:'middle',
    color:palette.mainBlack,
    fontSize:14,
    fontWeight:'400',
  },
  arrowStyle:{
    // width:20,
    // height:20,
    // fontSize:20,
  },
});

export default ServiceComponent;
