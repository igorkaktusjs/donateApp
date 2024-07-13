import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {FC} from 'react'
import { useNavigation } from '@react-navigation/native';
import { colors, sizes, shadow, spacing } from "../../constants/theme";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppleStyleSwipeableRow from './AppleStyleSwipeableRow';

export interface ChatRowPage {
    id: string,
    sender: string,
    message: string,
    timestamp: string,
    unreadCount: number,
    unread: boolean,
    avatar: string,
    lastMessageContent: string,
    deliveredOrRead: boolean,
}

const ChatRow: FC<ChatRowPage> = ({id,sender,message,timestamp,unread,unreadCount,avatar,lastMessageContent, deliveredOrRead}) => {

const navigation = useNavigation();

  return (
    <AppleStyleSwipeableRow id={id}>
  <TouchableOpacity 
    activeOpacity={0.6} 
    underlayColor={colors.red}
    onPress={() => navigation.navigate('ChatPageWithId', {id, sender, avatar})}
  >
    <View style={{flexDirection: 'row', alignContent: 'center', gap: 10, paddingLeft: spacing.m, paddingVertical: spacing.s}}>
      <Image source={{uri : avatar}} style={{ height: 50, width: 50, borderRadius: 50}} />
      <View style={{flex: 1,flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#ccc', paddingBottom: 3,}}>
        <View style={{gap: 4}}>
          <Text style={{fontSize: 14, color: unread ? colors.primary : colors.gray}}>{sender}</Text>
          <Text style={{color: unread ? colors.primary : colors.gray}}>{lastMessageContent}</Text>
        </View>
          
        <View style={{gap: 5, alignItems: 'center', marginRight: spacing.s}}>   
          <View style={{flexDirection: 'row', gap: 2}}>
            { deliveredOrRead ? 
              <MaterialCommunityIcons name="check" size={16} color="black" /> :
              <MaterialCommunityIcons name="check-all" size={16} color={colors.darkGrey} />
            }
            <Text style={{color: colors.gray}}>{timestamp}</Text>
          </View>     
          { unread && 
            <View style={styles.unreadCountContainer}>
              <Text >{unreadCount}</Text>
            </View>
          }    
        </View>
      </View>  
    </View>
  </TouchableOpacity>
</AppleStyleSwipeableRow>
    
  )
}

export default ChatRow;

const styles = StyleSheet.create({
  unreadCountContainer: {
    width: 34, 
    height: 25,
    borderRadius: 50,
    backgroundColor: colors.red, 
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 2,
        },
    shadowOpacity: 0.2, 
    shadowRadius: 3, 
    elevation: 5,
     }
})