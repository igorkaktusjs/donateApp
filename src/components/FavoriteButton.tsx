import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../constants/theme';
import Icon from '../components/Icon.jsx'

const FavoriteButton = ({active, style}) => {
  return (
    <View style={[{
        backgroundColor: colors.white,
        padding: 4,
    },
    style   
    ]}>
      <Icon  icon="Favorite"/>
    </View>
  )
}

export default FavoriteButton

const styles = StyleSheet.create({})