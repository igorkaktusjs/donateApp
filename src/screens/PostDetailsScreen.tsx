import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/theme';

const PostDetailsScreen = ({navigation, route}) => {
    const { post } = route.params;  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.title}>Категория пошуку{post.category }</Text>
    </View>
  )
}

export default PostDetailsScreen

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