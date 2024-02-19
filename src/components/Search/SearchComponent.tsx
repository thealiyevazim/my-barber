import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// ------ Svg foto ------ // 
import MagnifyGlassIcon from "~assets/icons/MagnifyGlass";
import { palette } from "~utils/theme";

interface SearchComponentProps {
  onSearch: (searchText: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity style={styles.buttonGlass} onPress={handleSearch}>
        <MagnifyGlassIcon name="search" style={styles.magnifyingGlass} />
      </TouchableOpacity>
      <TextInput
        style={styles.searchInputStyle}
        placeholder="Qidiruv"
        placeholderTextColor="#808080"
        value={searchText}
        onChangeText={setSearchText}
        tintColor="#000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    paddingHorizontal: 8,
    paddingVertical: 7,
    width: 270,
    gap: 5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    backgroundColor: palette.lightGray,
  },
  buttonGlass: {
    width: "10%",
  },
  searchInputStyle: {
    width: "85%",
    fontSize: 14,
    fontWeight: "400",
  },
  magnifyingGlass: {
    fontSize: 24,
    color: palette.lightGray,
  },
});

export default SearchComponent;