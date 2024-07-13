import { StyleSheet, Text, View, TextInput,  } from 'react-native'
import React, { useState} from 'react'
import { Ionicons  } from "@expo/vector-icons";

import { colors, sizes, shadow, spacing } from "../../constants/theme";



const SearchInputWithoutSubmitButton = ({placeholder}) => {

    const [text, onChangeText] = useState('');

  return (
    <View style={styles.searchContainer }>
            <Ionicons name="search-outline" size={24} color={colors.darkGrey} />
            <TextInput
                style={styles.searchInput}
                selectionColor={colors.darkGrey}
                placeholder={placeholder}
                placeholderTextColor={colors.darkGrey}
                onChangeText={onChangeText}
                maxLength={22}
                value={text}
            />
            </View>
  )
}

export default SearchInputWithoutSubmitButton

const styles = StyleSheet.create({
    searchContainer: {
        padding: spacing.s,
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: colors.lightGray,
        borderRadius: 50,
        shadowColor: '#000', 
        shadowOffset: {
          width: 0,
          height: 2,
            },
        shadowOpacity: 0.2, 
        shadowRadius: 3,
        
    },
    searchInput: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: spacing.s,
        marginHorizontal: spacing.s,
        gap: spacing.s,
        borderColor: colors.lightGray,
        borderWidth: StyleSheet.hairlineWidth,
        color: colors.darkGrey,
        fontWeight: 900,
        fontSize: sizes.body
    
    }, 
    titleSearch: {
        justifyContent: 'center'
    }
})