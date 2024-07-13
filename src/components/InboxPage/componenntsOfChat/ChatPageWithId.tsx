import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, {useState, useCallback, useEffect, useRef} from 'react'
import messageData from '../../../data/messages.json';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Swipeable } from 'react-native-gesture-handler';


import {GiftedChat, IMessage, Bubble, SystemMessage, Send, InputToolbar} from 'react-native-gifted-chat'
import { colors } from '../../../constants/theme';
import ChatMessageBox from './ChatMessageBox';
import ReplyMessageBar from './ReplyMessageBar';


const ChatPageWithId = () => {

    const [messages, setMessages] = useState<IMessage[]>([]);
    const [text, setText] = useState('')

    const insets = useSafeAreaInsets();

    const swipeableRowRef = useRef< | null>(null);

    const [replyMessage, setReplyMessage] = useState<IMessage | null>(null);

    useEffect(() => {
        setMessages([
          ...messageData.map((message) => {
            return {
              _id: message.id,
              text: message.msg,
              createdAt: new Date(message.date),
              user: {
                _id: message.from,
                name: message.from ? 'You' : 'Bob',
              },
            };
          }),
          {
            _id: 0,
            system: true,
            text: 'All your base are belong to us',
            createdAt: new Date(),
            user: {
              _id: 0,
              name: 'Bot',
            },
          },
        ]);
      }, []);

    const onSend = useCallback((messages = [])=>{
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages)
            )
    }, []);

    const updateRowRef = useCallback(
        (ref: any) => {
          if (
            ref &&
            replyMessage &&
            ref.props.children.props.currentMessage?._id === replyMessage._id
          ) {
            swipeableRowRef.current = ref;
          }
        },
        [replyMessage]
      );

      useEffect(() => {
        if (replyMessage && swipeableRowRef.current) {
          swipeableRowRef.current.close();
          swipeableRowRef.current = null;
        }
      }, [replyMessage]);
    
  return (
      <ImageBackground 
        source={require('../../../../assets/splash.png')}
        style={{flex: 1, marginBottom:insets.bottom, backgroundColor: colors.lightBrown }}
        >
          <GiftedChat
        messages={messages}
        onSend={(message) => onSend(messages)}
        user={{_id: 1}}
        onInputTextChanged={setText}
        renderSystemMessage={(props) => <SystemMessage {...props} textStyle={{color: colors.gray}}/>}
        renderBubble={(props) => {
            return (<Bubble 
            {...props}
            textStyle={{
                right:{
                    color: colors.black
                },
            }}
            wrapperStyle={{
                left: {
                    backgroundColor: colors.tinyBrown
                },
                right: {
                    backgroundColor: colors.tinyRed
                }
            }}
            
            />)
        }}
        bottomOffset={insets.bottom}
        renderAvatar={null}
        maxComposerHeight={100}
        renderSend={(props) => (
            <View style={{
                flexDirection: 'row',
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                gap: 14,
                paddingHorizontal: 14
            }}>
                {text.length > 0 && 
                    <Send {...props} 
                        containerStyle={{ justifyContent: 'center'}}>
                        <MaterialCommunityIcons name='send' color={colors.tinyRed} size={28}/>
                    </Send>}
                {text.length === 0 && (
                    <>
                    <MaterialCommunityIcons name='camera-outline' color={colors.tinyRed} size={28}/>
                    <MaterialCommunityIcons name='microphone-outline' color={colors.tinyRed} size={28}/>
                    </>
                ) }
            </View>
        )}
         renderInputToolbar={(props) => (
             <InputToolbar {...props}
                containerStyle={{
                    backgroundColor: colors.tinyBrown,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                renderActions={() => (
                    <View style={{justifyContent: 'center', alignItems: 'center', height: 44, left: 5}}>
                    <MaterialCommunityIcons name='plus' color={colors.tinyRed} size={28}/>
                </View>
                )}
            />
                
        
         )}
         textInputProps={styles.composer}
         renderMessage={(props) => (
             <ChatMessageBox {...props}
                setReplyOnSwipeOpen={setReplyMessage}
                updateRowRef={updateRowRef}
             />

         )}
         renderChatFooter={() => (
             <ReplyMessageBar clearReply={() => setReplyMessage(null)}
             message={replyMessage}
             />
         )}
    />
      </ImageBackground>
    
  )
}

export default ChatPageWithId

const styles = StyleSheet.create({
    composer: {
        backgroundColor: colors.whiteWithBrown,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: colors.lightGray,
        paddingHorizontal: 10,
        fontsize: 16,
        marginVertical: 4,
        paddingTop: 8
    }
})