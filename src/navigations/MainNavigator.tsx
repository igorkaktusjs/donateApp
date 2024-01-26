import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import  {NavigationContainer} from "@react-navigation/native"
import TabNavigator from "./TabNavigator";
import PostDetailsScreen from "../screens/PostDetailsScreen";
import { StatusBar } from "react-native";
import SearchPageScreen from "../screens/SearchPageScreen";
import ExploreHeader from '../components/searchPage/ExploreHeader';
import SearchResults from "../components/searchPage/SearchResults";
import { colors } from "../constants/theme";


const Stack = createStackNavigator();

const MainNavigator = () => {
    return <NavigationContainer>
        <StatusBar hidden/>
        <Stack.Navigator>
            <Stack.Screen 
                name="index" 
                component={TabNavigator} 
                options={{
                    headerShown: false

            }}/>
            <Stack.Screen
                name="PostDetails"
                component={PostDetailsScreen}
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
                    presentation: 'modal'
                }}
            />
            
        </Stack.Navigator>
    </NavigationContainer>
}

export default MainNavigator;