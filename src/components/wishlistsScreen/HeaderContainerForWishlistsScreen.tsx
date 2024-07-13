import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { colors, sizes, spacing } from '@/src/constants/theme';

const HeaderContainerForWishlistsScreen = () => {
  return (
    <View>
        <View style={styles.topBarContainer}>
            <TouchableOpacity style={styles.flexRowCenter}>
                <MaterialIcons name="arrow-back-ios" size={24} color={colors.red} />
                <Text style={[styles.textHeader, {color: colors.red}]}>Повернутись до пошуку</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.flexRowCenter}>
                <Text style={styles.textHeader}>Поділитися</Text>
                <MaterialCommunityIcons name="share-all-outline" size={24} color={colors.darkGrey} />
            </TouchableOpacity>
        </View>

        <View style={styles.titleContainer}>
            <Text style={styles.textTitle}>Збережені</Text>
        </View>
    </View>
  )
}

export default HeaderContainerForWishlistsScreen

const styles = StyleSheet.create({
    topBarContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flexRowCenter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        gap: 4
    }, 
    textHeader: {
        fontSize: sizes.body,
        fontWeight: '500',
        color: colors.gray
    }, 
    titleContainer: {
        marginTop:spacing.s,
        marginHorizontal: spacing.m
    },
    textTitle: {
        fontSize: sizes.title,
        fontWeight: '800',
        color: colors.red
    }

    
})