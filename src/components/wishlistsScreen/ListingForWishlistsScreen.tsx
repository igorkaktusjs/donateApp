import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ListRenderItem,
  RefreshControl
} from "react-native";
import React, {useState, useRef, useEffect, useCallback } from "react";

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { toggleWishlistItem } from '../../../store/userProfilesSlice';

import { Link } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { colors, sizes, spacing } from "../../constants/theme";
import { Listing } from "../../interfaces/listingInterface";
import { MaterialCommunityIcons } from "@expo/vector-icons/";
import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated";

import { LISTINGS } from "@/src/data";

const ListingForWishlistsScreen = () => {

    const user = useSelector((state: RootState) => state.userProfiles.userProfiles[0]);
    const allListings = useSelector((state: RootState) => state.listings.allListings);
    const dispatch = useDispatch();

  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const listRef = useRef<FlatList>(null);

  const listings = allListings.filter(listing => user.wishlist.listing_ids.includes(listing.listing_id));


  const renderItem: ListRenderItem<Listing> = ({ item }: { item: Listing }) => {
    const isWishlisted = user.wishlist.listing_ids.includes(item.listing_id)

    return (
        <View key={item.category.id}>
      <Animated.View
        style={styles.listing}
        entering={FadeInRight}
        exiting={FadeOutLeft}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("DetailsPostScreen", { item });
          }}
        >
          <Image style={styles.image} source={{ uri: item.image_url }} />
          <TouchableOpacity 
            onPress={ () => dispatch(toggleWishlistItem({ userId: user.id, listingId: item.listing_id }))}
            style={styles.icon}>
            <MaterialCommunityIcons
              name={isWishlisted ? "heart" : "heart-outline"}
              size={isWishlisted ? 36 : 32}
              color={isWishlisted ? colors.red : colors.gray} 
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Link to={{ screen: "DetailsPostScreen", params: { item } }}>
            <Text style={styles.title}>{item.name}</Text>
          </Link>
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
        <Link to={{ screen: "DetailsPostScreen", params: { item } }}>
          <Text style={styles.description}>{item.description}</Text>
        </Link>
        </View>
      </Animated.View>
    </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ref={listRef}
        data={loading ? [] : listings}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        />
    </View>
  );
};

export default ListingForWishlistsScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.m,
    paddingHorizontal: spacing.s,
  },
  listing: {
    marginBottom: spacing.l,
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: sizes.radius,
  },
  icon: {
    position: "absolute",
    top: 20,
    right: 20,
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
    paddingBottom: spacing.m,
  },
  description: {
    fontSize: sizes.body,
    fontWeight: "700",
    color: colors.gray,
  },
});
