import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Listings from "../components/searchPage/Listings";
import { colors, sizes, shadow, spacing } from "../constants/theme";

const SearchPageScreen = () => {
  const onDataChanged = (category: string) => {};

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.lightBrown,
      }}
    >
      <Text>Map</Text>
      <Listings />
    </View>
  );
};

export default SearchPageScreen;

const styles = StyleSheet.create({});
