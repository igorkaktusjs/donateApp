import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

import { colors, spacing, shadow, sizes } from '../constants/theme'


const TextBlockWithButton= ({title, description, onPress, buttonTitle}) => {
  return (
    <View style={styles.containter}>
        <View style={styles.titleBox}>
        <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.descriptionBox}>
        <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.buttonBox}>
        <Button title={buttonTitle} color={colors.lightBrown} onPress={onPress}/>
        </View>
    </View>
  )
}

export default TextBlockWithButton;

const styles = StyleSheet.create({
    containter: {
      marginHorizontal: spacing.l,
      marginVertical: spacing.s,
    },
    titleBox:{
      paddingVertical: spacing.m
    },
    title:{
      fontSize: sizes.h2,
      color: colors.redDark,
      fontWeight: '700'
    },
    descriptionBox:{},
    description: {
      fontSize: sizes.h3,
      fontWeight: '400', 
      color: colors.darkGrey
    },
    buttonBox: {
      marginVertical: spacing.m,
      backgroundColor: colors.redDark,
      width: sizes.width /2,
      borderRadius: sizes.radius
    }

})