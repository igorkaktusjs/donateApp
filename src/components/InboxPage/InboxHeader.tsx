import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, {useState} from 'react'
import { MaterialCommunityIcons, Ionicons  } from "@expo/vector-icons";

import { colors, sizes, shadow, spacing } from "../../constants/theme";

import SearchInputWithoutSubmitButton from '../UI/SearchInputWithoutSubmitButton';
import SearchBarHeader from '../UI/SearchBarHeader';
import InboxPage from './InboxPage';
import { useNavigation } from '@react-navigation/native';



const InboxHeader = () => {

const navigation = useNavigation();

const [text, onChangeText] = useState('');

const handlePress = () => {
    Keyboard.dismiss();
}

  return (
    <SafeAreaView>
        <TouchableWithoutFeedback onPress={handlePress}>
            <View>
            <View style={styles.container}>
            <View style={styles.iconCircle}>
            <MaterialCommunityIcons 
                name="dots-horizontal" 
                size={24} 
                color="black"
                onPress={() => {}}
                />
            </View> 
            <View style={styles.iconPlus}>
                <MaterialCommunityIcons 
                    name="chat-plus-outline" 
                    size={24} 
                    color="black"
                    onPress={() => navigation.navigate('NewChatModal')}
                    />
            </View>   
        </View>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Повідомлення</Text>
        </View>
            <SearchInputWithoutSubmitButton placeholder={'Search...'}/>
            <InboxPage/>
            </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
  )
}

export default InboxHeader;

const styles = StyleSheet.create({
    container: {
        height: 60,
        marginHorizontal: spacing.l,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    iconCircle: {
        width: 40, 
        height: 40,
        borderRadius: 25, 
        backgroundColor: colors.light, 
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000', 
        shadowOffset: {
          width: 0,
          height: 2,
            },
        shadowOpacity: 0.5, 
        shadowRadius: 3, 
        elevation: 5,
         },
    iconPlus: {
        width: 40, 
        height: 40,
        borderRadius: 25, 
        backgroundColor: colors.red, 
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000', 
        shadowOffset: {
          width: 0,
          height: 2,
            },
        shadowOpacity: 0.5, 
        shadowRadius: 3, 
        elevation: 5,
         },
    titleContainer:{
        marginHorizontal: spacing.l
    },
    titleText:{
        fontSize: sizes.h2,
        fontWeight: 'bold',
        color: colors.darkGrey,
        marginVertical: sizes.body
    },
    
})