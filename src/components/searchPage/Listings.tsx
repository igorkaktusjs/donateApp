import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ListRenderItem,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { useNavigation } from "@react-navigation/native";
import { colors, sizes, spacing } from "../../constants/theme";
import { Listing } from "../../interfaces/listingInterface";
import { MaterialCommunityIcons } from "@expo/vector-icons/";
import useStringTruncate from '../../hooks/useStringTruncate'
import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated";

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { toggleWishlistItem } from '../../../store/userProfilesSlice';


const Listings = ({ listings }) => {

  const navigation = useNavigation();

  const user = useSelector((state: RootState) => state.userProfiles.userProfiles[0])
  const allListings = useSelector((state: RootState) => state.listings.allListings);
  const dispatch = useDispatch();
  
  const [inputValue, setInputValue] = useState('');
  const maxLength = 200;
  const [truncatedString, updateTruncatedString] = useStringTruncate(inputValue, maxLength);

  const [loading, setLoiding] = useState(false);
  const listRef = useRef<FlatList>(null);

  const currentFilter = useAppSelector((state) => state.filters.currentFilter);

  useEffect(() => {
    setLoiding(true);

    setTimeout(() => {
      setLoiding(false);
    }, 100);
  }, [currentFilter]);

  const renderItem: ListRenderItem<Listing> = ({ item }) => {
    const isWishlisted = user.wishlist.listing_ids.includes(item.listing_id)

    return (
      <TouchableOpacity
      key={item.category.id}
      onPress={() => {
        navigation.navigate("DetailsPostScreen", { item });
      }}
    >
      <Animated.View style={styles.listing} entering={FadeInRight} exiting={FadeOutLeft} >
        <Image style={styles.image} source={{ uri: item.image_url }} />
        <TouchableOpacity 
          style={styles.icon}
          onPress={() => dispatch(toggleWishlistItem({ userId: user.id, listingId: item.listing_id }))}
          >
          <MaterialCommunityIcons
            name={isWishlisted ? "heart" : "heart-outline"}
            size={isWishlisted ? 34 : 32}
            color={isWishlisted ? colors.red : colors.darkGrey}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.categoryContainer}>
            <Text style={styles.category}>{item.category.name}</Text>
            <MaterialCommunityIcons
              name="tag-arrow-left-outline"
              size={20}
              color={colors.darkGrey}
            />
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{item.description}</Text>
          </View>
      </Animated.View>
    </TouchableOpacity>
    )
  }

  
  ;

  return (
    <View style={styles.container} >
      <FlatList
        ref={listRef}
        data={loading ? [] : allListings}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Listings;

const styles = StyleSheet.create({
  container: {
    padding: spacing.m,
    
  },
  listing: {
    marginBottom: spacing.l 
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: sizes.radius,
  },
  icon: {
    position: "absolute",
    top: 15,
    right: 15,
    padding: spacing.s
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: spacing.s,
    paddingHorizontal: spacing.m,
  },
  title: {
    fontSize: sizes.h3,
    fontWeight: "bold",
    color: colors.red,
  },
  category: {
    fontSize: sizes.body,
    fontWeight: "600",
    color: colors.gray,
  },
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  descriptionContainer: {
    paddingHorizontal: spacing.m,
    paddingBottom: spacing.m
  },
  description: {
    fontSize: sizes.body,
    fontWeight: "700",
    color: colors.gray,
  }
});
