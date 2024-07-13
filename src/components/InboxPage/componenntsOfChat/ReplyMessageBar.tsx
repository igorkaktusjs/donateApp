import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { IMessage, clearReply} from 'react-native-gifted-chat';
import { colors } from '../../../constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated'




type ReplyMessageBarProps = {
  clearReply: () => void;
  message: IMessage | null;
};

const ReplyMessageBar = ({ clearReply, message }: ReplyMessageBarProps) => {
  return (
    <>
    {message && (
        <Animated.View 
            entering={FadeInDown}
            exiting={FadeOutDown}
            style={{ height: 50, flexDirection: 'row', backgroundColor: colors.tinyBrown}}>
            <View style={{height: 50,width: 6, backgroundColor: colors.redDark}}></View>
            <View>
                <Text style={{color: colors.darkGrey, paddingLeft: 10, paddingTop: 2, fontWeight: '600', fontSize: 15}}>{message?.user.name}</Text>
                <Text style={{color: colors.black, paddingLeft: 10, paddingTop: 5}}>
                    {message!.text.length > 40 ? message?.text.substring(0,50) + '...' : message?.text}
                </Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center', paddingRight: 10}}>
                <TouchableOpacity onPress={clearReply}>
                    <MaterialCommunityIcons name="close-circle-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </Animated.View>

    )
     }
    </>
  
  );
    }

export default ReplyMessageBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    
  },
  replyImage: {
    width: 20,
    height: 20,
  },
  replyImageContainer: {
    paddingLeft: 8,
    paddingRight: 6,
    borderRightWidth: 2,
    borderRightColor: '#2196F3',
    marginRight: 6,
    height: '100%',
    justifyContent: 'center',
  },
  crossButtonIcon: {
    width: 24,
    height: 24,
  },
  crossButton: {
    padding: 4,
  },
  messageContainer: {
    flex: 1,
  },
});