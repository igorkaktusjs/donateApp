import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/theme';

import { useSelector, useDispatch } from 'react-redux'


const SearchPageScreenByCategory = ({navigation, route}) => {


    const { post } = route.params;  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.title}>Категория пошуку{post.category }</Text>
    </View>
  )
}

export default SearchPageScreenByCategory;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: colors.redDark
    }
})