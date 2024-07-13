import { StyleSheet, Text, View,ViewStyle} from 'react-native'
import React from 'react'
import { colors, sizes, shadow, spacing } from "../../constants/theme";

//Separator

//Define the interface for components props 
interface SeparatorProps {
  style?: ViewStyle
}

const Separator : React.FC<SeparatorProps> = ({style}) => {
  return <View style={[styles.separator, style]}/> 
} 

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: colors.lightGray,
    marginVertical: spacing.s
  }
})

export default Separator;