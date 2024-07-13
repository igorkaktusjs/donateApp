import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React from "react";
import ChatRow from "./ChatRow";

import { colors, sizes, shadow, spacing } from "../../constants/theme";

import AppleStyleSwipeableRow from "./AppleStyleSwipeableRow";

const InboxPage = () => {
  const chatData = [
    {
      id: "1",
      sender: "John Richmond",
      message: "Hello, how are you?",
      timestamp: "12:05",
      unreadCount: 3,
      unread: true,
      avatar: "https://avatars.githubusercontent.com/u/103033791?v=4",
      lastMessageContent: "Hello, how are you?",
      deliveredOrRead: true,
    },
    {
      id: "2",
      sender: "Mary",
      message: "Hi, Im good, thanks!",
      timestamp: "12:10",
      unreadCount: 0,
      unread: false,
      avatar: "https://avatars.githubusercontent.com/u/103033791?v=4",
      lastMessageContent: "Hi, Im good, thanks!",
      deliveryOrRead: true,
    },
    {
      id: "3",
      sender: "John",
      message: "Great! What are you doing today?",
      timestamp: "12:15",
      unreadCount: 0,
      unread: false,
      avatar: "https://avatars.githubusercontent.com/u/103033791?v=4",
      lastMessageContent: "Great! What are you doing today?",
      deliveredOrRead: true,
    },
    {
      id: "4",
      sender: "Jane",
      message: "Hey there!",
      timestamp: "1:00",
      unreadCount: 22,
      unread: true,
      avatar: "https://avatars.githubusercontent.com/u/103033791?v=4",
      lastMessageContent: "Hey there!",
      deliveredOrRead: false,
    },
    {
      id: "5",
      sender: "Michael",
      message: "Morning!",
      timestamp: "1:05",
      unreadCount: 222,
      unread: true,
      avatar: "https://avatars.githubusercontent.com/u/103033791?v=4",
      lastMessageContent: "Morning!",
      deliveredOrRead: false,
    },
    {
      id: "6",
      sender: "Emily",
      message: "How was your day?",
      timestamp: "1:10",
      unreadCount: 0,
      unread: false,
      avatar: "https://avatars.githubusercontent.com/u/103033791?v=4",
      lastMessageContent: "How was your day?",
      deliveredOrRead: false,
    },
    {
      id: "7",
      sender: "Alex",
      message: "Hello!",
      timestamp: "1:15",
      unreadCount: 0,
      unread: false,
      avatar: "https://avatars.githubusercontent.com/u/103033791?v=4",
      lastMessageContent: "Hello!",
      deliveredOrRead: false,
    },
    {
      id: "8",
      sender: "Sophia",
      message: "Hey!",
      timestamp: "1:20",
      unreadCount: 0,
      unread: false,
      avatar: "https://avatars.githubusercontent.com/u/103033791?v=4",
      lastMessageContent: "Hey!",
      deliveredOrRead: false,
    },
    {
      id: "9",
      sender: "William",
      message: "Good afternoon!",
      timestamp: "1:25",
      unreadCount: 0,
      unread: false,
      avatar: "https://avatars.githubusercontent.com/u/103033791?v=4",
      lastMessageContent: "Good afternoon!",
      deliveredOrRead: false,
    },
    {
      id: "10",
      sender: "Olivia",
      message: "Howdy!",
      timestamp: "1:30",
      unreadCount: 0,
      unread: false,
      avatar: "https://avatars.githubusercontent.com/u/103033791?v=4",
      lastMessageContent: "Howdy!",
      deliveredOrRead: false,
    },
    {
      id: "11",
      sender: "James",
      message: "Hey, what's up?",
      timestamp: "1:35",
      unreadCount: 0,
      unread: false,
      avatar: "https://avatars.githubusercontent.com/u/103033791?v=4",
      lastMessageContent: "Hey, what's up?",
      deliveredOrRead: true,
    },
    {
      id: "12",
      sender: "Emma",
      message: "Hi there!",
      timestamp: "1:40",
      unreadCount: 0,
      unread: false,
      avatar: "https://avatars.githubusercontent.com/u/103033791?v=4",
      lastMessageContent: "Hi there!",
      deliveredOrRead: true,
    },
    {
      id: "13",
      sender: "Daniel",
      message: "Good evening!",
      timestamp: "1:45",
      unreadCount: 0,
      unread: false,
      avatar: "https://avatars.githubusercontent.com/u/103033791?v=4",
      lastMessageContent: "Good evening!",
      deliveredOrRead: true,
    },
    {
      id: "14",
      sender: "Isabella",
      message: "What's new?",
      timestamp: "1:50",
      unreadCount: 0,
      unread: false,
      avatar: "https://avatars.githubusercontent.com/u/103033791?v=4",
      lastMessageContent: "What's new?",
      deliveredOrRead: true,
    },
    {
      id: "15",
      sender: "Liam",
      message: "Hi friend!",
      timestamp: "1:55",
      unreadCount: 0,
      unread: false,
      avatar: "https://avatars.githubusercontent.com/u/103033791?v=4",
      lastMessageContent: "Hi friend!",
      deliveredOrRead: true,
    },
  ];

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <FlatList
        contentInsetAdjustmentBehavior="automatic"
        data={chatData}
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ marginLeft: 5 }} />}
        renderItem={({ item }) => <ChatRow key={item.id} {...item} />}
      ></FlatList>
    </ScrollView>
  );
};

export default InboxPage;

const styles = StyleSheet.create({});
