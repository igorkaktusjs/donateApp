import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import ContainerWithShadow from "../../components/UI/ContainerWithShadow";

import { colors, sizes, shadow, spacing } from "../../constants/theme";
import { ColorProperties } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

const HeaderContainerForProfileScreen = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
          <Text style={styles.textTitle}>Profile</Text> 
          <MaterialCommunityIcons name="bell-outline" size={28} color={colors.gray} /> 
        </View>
        <TouchableOpacity style={styles.profileContainer}>
          <Image
            style={styles.avatar}
            source={require('../../../assets/image/ua-1.jpg')}
          />
          <View style={styles.nameContainer}>
              <Text style={styles.textName}>Ihor</Text>
              <Text style={styles.textShowProfile}>Show profile</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={22} color="black" />
        </TouchableOpacity>
    </View>
  )
}

export default HeaderContainerForProfileScreen

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      textTitle: {
        fontSize: sizes.title,
        fontWeight: '600',
        color: colors.red
      },
      profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20,
        paddingVertical: spacing.l
      },
      avatar: {
        width: 60,
        height: 60,
        borderRadius: 50
      },
      nameContainer: {
        flex: 1,
        gap: 5
      },
      textName: {
        fontSize: sizes.h3,
        fontWeight: '500'
      },
      textShowProfile: {
        color: colors.gray
      },
})