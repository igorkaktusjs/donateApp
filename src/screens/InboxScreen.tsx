import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors, sizes, shadow, spacing } from "../constants/theme";

import InboxHeader from '../components/InboxPage/InboxHeader';

const InboxScreen = () => {
  return (
    <View style={styles.container}>
      <InboxHeader/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: sizes.title,
    marginHorizontal: sizes.body
  }
})

export default InboxScreen