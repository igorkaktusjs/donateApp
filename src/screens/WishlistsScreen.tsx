import { StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { spacing } from "../constants/theme";

import HeaderContainerForWishlistsScreen from "../components/wishlistsScreen/HeaderContainerForWishlistsScreen";
import ListingForWishlistsScreen from "../components/wishlistsScreen/ListingForWishlistsScreen";

const WishlistsScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <HeaderContainerForWishlistsScreen/>
        <ListingForWishlistsScreen/>
      </View>
    </SafeAreaView>
  )
}

export default WishlistsScreen

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.m,
    marginVertical: spacing.xl,
    height: "100%",
  },
});