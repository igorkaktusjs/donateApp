import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Dimensions, TouchableOpacity} from "react-native";
import React, { useMemo } from "react";
import { LISTINGS } from "../data/index";
import { colors, sizes, spacing } from "../constants/theme";
import   Animated  from "react-native-reanimated"
import { MaterialCommunityIcons, EvilIcons, MaterialIcons  } from "@expo/vector-icons";
import TopPostsCarousel from '../components/TopPostsCarousel'
import { TOP_POSTS } from "../data";

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { toggleWishlistItem } from '../../store/userProfilesSlice';


const { width } = Dimensions.get('window')

const DetailsPostScreen = ({ navigation, route }) => {

  const user = useSelector((state: RootState) => state.userProfiles.userProfiles[0])
  const allListings = useSelector((state: RootState) => state.listings.allListings);
  const dispatch = useDispatch();


  const { item } = route.params;

  const isWishlisted = user.wishlist.listing_ids.includes(item.listing_id)

  return (
    <View style={styles.container}>
      <Animated.ScrollView>
        <Animated.Image
          source={{ uri: item.image_url }}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <View style={styles.dateAndWishContainer}>
            <Text style={styles.publicationDate}>Опубліковано сьогодні о 10:05</Text>
            <TouchableOpacity 
          style={styles.wishIcon}
          onPress={() => dispatch(toggleWishlistItem({ userId: user.id, listingId: item.listing_id }))}
          >
          <MaterialCommunityIcons
            name={isWishlisted ? "heart" : "heart-outline"}
            size={34}
            color={isWishlisted ? colors.red : colors.darkGrey}
          />
        </TouchableOpacity>
            </View>
          <Text style={styles.name}>{item.name}</Text>
            <View style={styles.locationContainer}>
              <Text style={styles.location}>Харків</Text>
              <EvilIcons name="location" size={24} color={colors.redDark} />
            </View>
          <View style={styles.categoryContainer}>
          <Text style={styles.deliveryMethods}>Спосіб отримання: Особиста зустріч, Нова почта</Text>
          <Text style={styles.categoryName}>{item.category.name}</Text>
            <MaterialCommunityIcons 
              name={item.category.icon}
              size={24}
              color={colors.redDark}
              />
          </View>
          <View style={styles.divider} />
          <View style={styles.discriptionContainer}>
          <Text style={styles.descriptionTitle}>Опис</Text>
            <Text style={styles.descriptionText}>{item.description}</Text>
            </View>
            <View style={styles.divider} />
          <View style={styles.priceContainer}> 
              <Text style={styles.price}>Ціна: Безкоштовно</Text>
            </View>
            <TouchableOpacity style={styles.informationContainer}>
            <MaterialCommunityIcons name="information-outline" size={24} color={colors.red} />
              <Text style={styles.informationText}>Не розголошуйте особисті дані та уникайте надсилання грошей. Докладніше...</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity style={styles.profileContainer}>
              <Image source={{ uri: item.image_url }}
                    style={styles.imageProfile}/>
              <View style={styles.profileTextContainer}>
                <Text style={styles.profileTitle}>Користувач</Text>
                <Text style={styles.profileText}>На Donate Ua з 15 лютого 2024 р.</Text>
                <Text style={styles.profileOnline}>Був онлайн 22 лютого 2024 p.</Text>

                </View>
              </TouchableOpacity>
              <View style={styles.divider} />

              <View>
                <Text style={styles.anotherPosts}>Інші оголошення автора</Text>
                <TopPostsCarousel list={TOP_POSTS} />
              </View>
              <View style={styles.divider} />
              
              <TouchableOpacity style={styles.profileContainer}>
              <MaterialCommunityIcons name="comment-account" size={30} color={colors.darkGrey} />
              <View style={styles.profileTextContainer}>
                <Text style={styles.profileTitle}>Відгуки</Text>
                <Text style={styles.profileText}>Користувач ще немає відгуків</Text>
                <Text style={styles.profileOnline}>Буже важливо залишати відгук та поставити рейтинг</Text>

                </View>
              </TouchableOpacity>
              <View style={styles.divider} />

              <View>
                <Text style={styles.anotherPosts}>Подібні оголошення</Text>
                <TopPostsCarousel list={TOP_POSTS} />
              </View>
              <View style={styles.divider} />

              {/* Report block */}
              <TouchableOpacity style={styles.reportContainer}>
                <MaterialIcons name="report" size={30} color={colors.redDark} />
                <Text style={styles.reportText}>Поскаржитися</Text>
              </TouchableOpacity>
              <View style={styles.divider} />

        
          </View>
      </Animated.ScrollView>
    </View>
  );
};

export default DetailsPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light
  },
  image: {
    height: 300,
    width
  },
  dateAndWishContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  publicationDate:{
    fontSize: sizes.body-3,
    color: colors.darkGrey
  },
  wishIcon: {

  },
  infoContainer: {
    marginVertical: spacing.m,
    marginHorizontal: spacing.l
  },
  name: {
    fontSize: sizes.title-2,
    fontWeight: 'bold',
    color: colors.red
  },
  categoryContainer:{
    marginVertical: spacing.s,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 5
  },
  categoryName: {
    fontSize: sizes.h3,
    fontWeight: 'bold',
    color: colors.gray
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.red,
    marginVertical: spacing.m,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.s,
  },

  location:{
    fontSize: sizes.h3,
    fontWeight: '600',
    color: colors.gray
  },
  priceContainer:{
    alignItems: 'flex-start',
    marginVertical: spacing.s
  },
  price: {
    fontSize: sizes.h3,
    fontWeight: '600',
    color: colors.gray
  },
  informationContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: colors.lightGray,
    padding: 10,
    borderRadius: sizes.radius, 
  },
  informationText:{
    fontSize: sizes.body,
    fontWeight: '400',
    color: colors.redDark
  },
  deliveryMethods: {
    flex:2,
    alignItems: 'center',
    paddingRight: spacing.s,
    fontSize: sizes.body-2,
    color: colors.darkGrey
  },
  discriptionContainer:{
    gap: 4
  },
  descriptionTitle:{
    fontSize: sizes.h2,
    fontWeight: '800',
    color: colors.red
  },
  descriptionText:{
    fontSize: sizes.body,
    fontWeight: '600',
    color: colors.gray
  },
  profileContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  imageProfile:{
    width: 50,
    height: 50,
    borderRadius: 50
  },
  profileTextContainer: {
    gap: 5
  },
  profileTitle: {
    fontSize: sizes.h3,
    fontWeight: '800',
    color: colors.red
  },
  profileText: {
    fontSize: sizes.body-2,
    fontWeight: '600',
    color: colors.gray
  },
  profileOnline:{
    fontSize: sizes.body-3,
    fontWeight: '400',
    color: colors.gray
  },
  reportContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.s
  },
  reportText: {
    fontSize: sizes.h3,
    fontWeight: '800',
    color: colors.gray
  },
  anotherPosts: {
    fontSize: sizes.h3,
    fontWeight: '600',
    color: colors.gray
  }

});
