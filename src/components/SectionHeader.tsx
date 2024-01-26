import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { colors, sizes, spacing } from '../constants/theme'

const SectionHeader = ({title, onPress, buttonTitle = 'Button'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button  
        title={buttonTitle} 
        color={colors.redDark}
        accessibilityLabel={buttonTitle}
        />
    </View>
  )
}

export default SectionHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: spacing.l,
        marginTop: spacing.l,
        marginBottom: spacing.s

    },
    title: {
        fontSize: sizes.h3,
        fontWeight: 'bold',
        color: colors.darkGrey
    },
    button: {
        color: colors.redDark
    }
})