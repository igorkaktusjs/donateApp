import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchInputWithoutSubmitButton from '../../UI/SearchInputWithoutSubmitButton'
import contacts from '../../../data/contacts.json'
import { AlphabetList } from 'react-native-section-alphabet-list'
import { colors } from '../../../constants/theme'

const NewChatModal = () => {

    const data = contacts.map((contact, index) => ({
        value: `${contact.first_name} ${contact.last_name}`,
        name: `${contact.first_name} ${contact.last_name}`,
        img: contact.img,
        desc: contact.desc,
        key: `${contact.first_name} ${contact.last_name}-${index}`,
        isInvite: contact.isInvite
    }));
    
  return (
    <View style={{backgroundColor: colors.lightBrown, paddingTop: 20}}>
        <View style={{paddingHorizontal: 20}}>
        <SearchInputWithoutSubmitButton placeholder='Пошук'/>
        </View>
        
      <AlphabetList
        data={data}
        indexLetterStyle={{
            color: colors.red,
            fontSize: 11,
            paddingRight:3 
        }}
        indexContainerStyle={{
            width: 24,
            backgroundColor: colors.lightGray,

        }}
        style={{marginLeft: 24}}
        renderCustomSectionHeader={(section) => (
            <View style={styles.sectionHeaderContainer}>
                <Text style={styles.textHeader}>{section.title}</Text>
            </View>
        )}
        renderCustomItem={(item) => (
                <View style={styles.listItemContainer}>
                <Text style={styles.listItemLabel}>{item.value}</Text>
                { item.isInvite ? null : <Text style={styles.inviteButton}>Invite</Text>}
            </View>
        )}
      />
    </View>
  )
}

export default NewChatModal

const styles = StyleSheet.create({
    sectionHeaderContainer:{
        backgroundColor: colors.lightBrown,  
        paddingHorizontal: 14, 
        marginRight: 24, 
        justifyContent: 'center',
        
    },
    textHeader:{
        color: colors.redDark,
        fontWeight: 'bold'
    },
    listItemContainer:{
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 14,
        paddingVertical: 16,
        borderBottomWidth: 0.2,
        borderBottomColor: colors.lightGray,
        marginBottom: 1,
        marginRight: 18,
        backgroundColor: colors.tinyBrown,
    },
    listItemLabel: {
        fontSize: 14,
        fontWeight: '500'
    },
    inviteButton:{
        fontSize: 16,
        fontWeight: '500',
        color: colors.redDark
    }
})