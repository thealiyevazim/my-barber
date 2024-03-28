import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import FilterComponent from "~components/Filtr/FiltrComponent";
// ------ Svg foto ------ // 
import MagnifyGlassIcon from "~assets/icons/MagnifyGlass";
import { palette } from "~utils/theme";

interface SearchComponentProps {
  onSearch: (searchText: string) => void;
}

const { height, width } = Dimensions.get("window");

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {

  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.buttonGlass} onPress={handleSearch}>
          <MagnifyGlassIcon />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInputStyle}
          placeholder="Qidiruv"
          placeholderTextColor="#808080"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <FilterComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  searchContainer: {
    backgroundColor: palette.lightGray,
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
    gap: 5
  },
  buttonGlass: {
    width: "10%",
    alignItems: "center",
    justifyContent: "center"
  },
  searchInputStyle: {
    fontSize: 14,
    fontWeight: "400",
  },
});

export default SearchComponent;