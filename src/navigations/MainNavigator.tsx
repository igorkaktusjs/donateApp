import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import  {NavigationContainer} from "@react-navigation/native"
import TabNavigator from "./TabNavigator";
import PostDetailsScreen from "../screens/SearchPageScreenByCategory";
import { StatusBar, View, Image, Text} from "react-native";
import SearchPageScreen from "../screens/SearchPageScreen";
import ExploreHeader from '../components/searchPage/ExploreHeader';
import SearchResults from "../components/searchPage/SearchResults";
import { colors, sizes } from "../constants/theme";
import SearchPageScreenByCategory from '../screens/SearchPageScreenByCategory'
import DetailsPostScreen from '../screens/DetailsPostScreen'
import InboxScreen from "../screens/InboxScreen";
import NewChatModal from "../components/InboxPage/componenntsOfChat/NewChatModal";
import { SearchBar } from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import CloseIcon from "../components/UI/CloseIcon";
import ChatPageWithId from "../components/InboxPage/componenntsOfChat/ChatPageWithId";
import SingUpPage from "../components/loginPage/SingUpPage";

const Stack = createStackNavigator();

const MainNavigator = () => {

    return <NavigationContainer>
        <StatusBar/>
        <Stack.Navigator>
            <Stack.Screen 
                name="index" 
                component={TabNavigator} 
                options={{
                    headerShown: false,
            }}/>
            <Stack.Screen
                name="SearchPageScreenByCategory"
                component={SearchPageScreenByCategory}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="All"    
                component={SearchPageScreen}
                options={{
                    header: () => <ExploreHeader/>
                }}
            />
            <Stack.Screen
                name="SearchResults"
                component={SearchResults}
                options={{
                    presentation: 'modal',
                }}
            />
            <Stack.Screen
                name="DetailsPostScreen"
                component={DetailsPostScreen}
                options={{
                    headerTitle: '', 
                    headerTransparent: true,
                    headerShown: false,
                }}    
            />
            <Stack.Screen
                name="InboxScreen"
                component={InboxScreen}
                options={{
                    headerTitle: 'Chats', 
                    headerTransparent: true,
                    headerShown: true,
                }}
                
            />
            <Stack.Screen
                name="NewChatModal"
                component={NewChatModal}
                options={{
                    presentation: 'modal',
                    title: 'New Chat',
                    headerTransparent: false,
                    headerStyle : {
                        backgroundColor: colors.lightGray
                    },
                    headerRight: () => <CloseIcon/>    
                }
                }
            />
            <Stack.Screen
                name={"ChatPageWithId"}
                component={ChatPageWithId}
                options={({route }) => ({   
                    title: `Chat with ${route.params.sender}`,
                    headerBackTitleVisible: false,
                    headerStyle: {backgroundColor: colors.tinyBrown},
                    headerRight: () => (
                        <View style={{flexDirection: 'row', marginHorizontal: sizes.body}}>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name="phone-outline" size={28} color={colors.red}/>
                            </TouchableOpacity>
                        </View>
                    ),
                    headerTitle: () => (
                        <View style={{
                            flexDirection: 'row',
                            gap: 10,
                            paddingBottom: 4,
                            alignItems: 'center',
                            width: 275
                        }}>
                            <Image 
                                source={{uri: `${route.params.avatar}`}}
                                style={{width: 40, height: 40, borderRadius: 50 }}
                                />
                                <Text style={{fontSize: 16, fontWeight: 500}}>{route.params.sender}</Text>
                        </View>
                    )
                })}
            />
            <Stack.Screen 
                name="SingUpPage"
                component={SingUpPage}
                options={{
                    headerTitle: 'Sing Up', 
                    headerTransparent: true,
                    headerShown: false,
                }}

            />
        </Stack.Navigator>
    </NavigationContainer>
}

export default MainNavigator;