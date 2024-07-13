import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from "../../constants/theme";



const CloseIcon = () => {

    const navigation = useNavigation();

  return (
    <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{backgroundColor: colors.lightGray, borderRadius: 20, padding: 4}}>
        <MaterialCommunityIcons name="close" size={24} color="black" />                                                 
    </TouchableOpacity>
  )
}

export default CloseIcon

const styles = StyleSheet.create({})