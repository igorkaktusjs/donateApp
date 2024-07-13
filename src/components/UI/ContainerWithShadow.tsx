import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { colors, sizes, shadow, spacing } from "../../constants/theme";

const ContainerWithShadow = ({children, }, style) => {
  return (
    <View style={[styles.container, shadow.dark, {...style}]}>
        {children}
    </View>
  )
}

export default ContainerWithShadow

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.whiteWithBrown,
        borderTopStartRadius: 16,
        borderTopEndRadius:16,
        padding: spacing.m
    }
})