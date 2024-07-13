import { StyleSheet, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import WishlistsScreen from "../screens/WishlistsScreen";
import PostsScreen from "../screens/PostsScreen";
import InboxScreen from "../screens/InboxScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { useNavigation } from "@react-navigation/native";


import { MaterialCommunityIcons } from "@expo/vector-icons/";

import { colors } from "../constants/theme";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: colors.darkGrey2,
        tabBarActiveTintColor: colors.primaryDark,
        tabBarStyle: {
          backgroundColor: colors.tinyBrown
        }
      }}
    >
      <Tab.Screen
        name="Головна"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="home-variant-outline"
              size={28}
              color={focused ? colors.redDark : colors.darkGrey2}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Вибрані"
        component={WishlistsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="heart-outline"
              size={28}
              color={focused ? colors.redDark : colors.darkGrey2}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Додати"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="clipboard-plus-outline"
              size={28}
              color={focused ? colors.redDark : colors.darkGrey2}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Повідомлення"
        component={InboxScreen}
        options={{
          headerTransparent: true,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="chat-outline"
              size={28}
              color={focused ? colors.redDark : colors.darkGrey2}
              
            />
          ),
        }}
      />
      <Tab.Screen
        name="Профіль"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="account"
              size={28}
              color={focused ? colors.redDark : colors.darkGrey2}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default TabNavigator;
