import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { colors, sizes, shadow, spacing } from "../../constants/theme";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Separator from '../UI/Separator';

interface ListRenderItem {
  id: number;
  title: string;
  icon: string;
  onPress: string;
}

const settingsList = [
  {
    id:1, 
    title :'Персональна інформація',
    icon: 'account-circle-outline',
    onPress: ''
  },
  {
    id:2, 
    title :'Налаштування чату',
    icon: 'account-circle-outline',
    onPress: ''
  },
  {
    id:3, 
    title :'Правила та Безпека',
    icon: 'account-circle-outline',
    onPress: ''
  },
  {
    id:4, 
    title :'Доступність',
    icon: 'account-circle-outline',
    onPress: ''
  },
  {
    id:5, 
    title :'Видалити профіль',
    icon: 'account-circle-outline',
    onPress: ''
  }
]


const SettinngsBoxForProfileScreen = () => {

  const RenderItem = () => {
    return (
      settingsList.map((item) => (
        <View style={styles.settingsListContainer} key={item.id}>
              <TouchableOpacity style={styles.settingsListItemContainer}>
                <MaterialCommunityIcons name={item.icon} size={24} color={colors.red} />
                <Text style={styles.textItem}>{item.title}</Text>
                <MaterialIcons name="arrow-forward-ios" size={20} color={colors.darkGrey} />
              </TouchableOpacity>
              <Separator/>
            </View>
      ))
    )
  }

  return (

    <View style={styles.settingsContainer}>
      <View style={styles.settingsHeaderContainer}>
          <Text style={styles.textSettings}>Settings</Text> 
          <MaterialIcons name="settings" size={24} color={colors.darkGrey} /> 
      </View>
          <RenderItem/>
            <TouchableOpacity style={styles.logoutOfProfileContainer}>
            <MaterialCommunityIcons name="logout" size={24} color={colors.redDark} />
              <Text style={styles.textLogoutOfProfile}>
                Вийти із профіля
              </Text>
            </TouchableOpacity>
    </View>
  )
}

export default SettinngsBoxForProfileScreen

const styles = StyleSheet.create({
    settingsContainer: {

    },
    settingsHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: spacing.s,
        paddingHorizontal: spacing.m,
        marginVertical: spacing.l
      },
      textSettings: {
        fontSize: sizes.h2,
        fontWeight: '600',
        color: colors.darkGrey

      },
      settingsListContainer: {

      },
      settingsListItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: spacing.s,
        paddingHorizontal:spacing.s,
        paddingVertical: spacing.s
      },
      textItem: {
        flex: 1,
        fontSize: sizes.h3,
        fontWeight: '500',
        color: colors.gray
      },
      logoutOfProfileContainer:{
        flexDirection: 'row',
        justifyContent:'flex-end',
        alignItems: 'center',
        paddingHorizontal: spacing.m,
        gap:5,
        paddingVertical: spacing.s
      },
      textLogoutOfProfile:{
        fontSize: sizes.h3,
        fontWeight: '600',
        color: colors.redDark
      }


})