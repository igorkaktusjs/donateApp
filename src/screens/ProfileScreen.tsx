import { StyleSheet, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import SettinngsBoxForProfileScreen from "../components/profileScreen/SettinngsBoxForProfileScreen";
import VerificationBoxForProfileScreen from "../components/profileScreen/VerificationBoxForProfileScreen";
import HeaderContainerForProfileScreen from "../components/profileScreen/HeaderContainerForProfileScreen";

import { spacing } from "../constants/theme";

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <HeaderContainerForProfileScreen />
        <VerificationBoxForProfileScreen />
        <SettinngsBoxForProfileScreen />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.m,
    marginVertical: spacing.xl,
    height: "100%",
  },
});
