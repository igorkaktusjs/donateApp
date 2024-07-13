import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { shadow, sizes, spacing, colors } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";

const CARD_WIDTH = sizes.width - 100;
const CARD_HEIGHT = 200;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

const TopPostsCarousel = ({ list }) => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={list}
      horizontal
      snapToInterval={CARD_WIDTH_SPACING}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      keyExtractor={(i) => i.id}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            style={[
              styles.container,
              { marginRight: index === list.length - 1 ? spacing.l : 0 },
            ]}
            onPress={() => {
              navigation.navigate('All', item);
            }}
          >
            <View style={[styles.card, shadow.dark]}>
              <View style={styles.imageBox}>
                <Image source={item.image} style={styles.image} />
              </View>
              <View style={styles.titleBox}>
                <Text style={[styles.title, shadow.darkTitle]}>
                  {item.title}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default TopPostsCarousel;

const styles = StyleSheet.create({
  container: {
    marginLeft: spacing.l,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginVertical: 10,
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: sizes.radius,
    overflow: "hidden",
  },
  titleBox: {
    position: "absolute",
    top: CARD_HEIGHT - 40,
    left: 16,
  },
  title: {
    fontSize: sizes.h3,
    fontWeight: "600",
    margin: spacing.s,
    color: colors.lightBrown,
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    resizeMode: "cover",
  },
});
