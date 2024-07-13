import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from "react-native";
import React from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import ContainerWithShadow from "../../components/UI/ContainerWithShadow";


import { colors, sizes, shadow, spacing } from "../../constants/theme";

const VerificationBoxForProfileScreen = () => {
  return (
    <TouchableOpacity >
          <ContainerWithShadow >
            <Text style={styles.textVerificationTitle}>
              Варификація профілю
            </Text>
          <View style={styles.containerVerification}>
            <View style={styles.containerVerificationWithStatus}>
              <MaterialIcons name="check-circle-outline" size={24} color={colors.green} />
              <Text style={styles.textVerification}> Почта Варифікована</Text>
            </View >
            <View style={styles.containerVerificationWithStatus}>
            <MaterialIcons name="assistant-photo" size={24} color={colors.red} />
              <Text style={styles.textVerification}> Телефон потрібно варифікувати</Text>
          </View>
          <View style={styles.containerVerificationWithStatus}>
              <MaterialCommunityIcons name="bank-check" size={24} color={colors.green} />
              <Text style={styles.textVerification}>Варифікований з допомогою BankID</Text>
          </View>
          </View>
        </ContainerWithShadow>
        </TouchableOpacity>
  )
}

export default VerificationBoxForProfileScreen

const styles = StyleSheet.create({
    textVerificationTitle:{
        fontSize: sizes.h3,
        fontWeight: '500',
        paddingHorizontal: spacing.s,
        color: colors.gray
      },
      containerVerification:{
        
      },
      containerVerificationWithStatus: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.s,
        padding: spacing.s
      },
      textVerification: {
        fontSize: sizes.body,
        fontWeight: '500',
        color: colors.darkGrey
      }
})