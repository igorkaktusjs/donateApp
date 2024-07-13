import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { CATEGORY } from "../../data/index";
import { colors, sizes, shadow, spacing } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { getCategory, selectedFilter} from "../../../store/filtersSlice"; 

const ExploreHeader = () => {

  const dispatch = useAppDispatch();
   
  useEffect(() => {
    dispatch(getCategory())
  },[]) 

  const filters = useAppSelector((state) => state.filters);
  const currentFilter = useAppSelector((state) => state.currentFilter);

  const navigation = useNavigation();
  const scrollRef = useRef<ScrollView>(null);
  const itemsRef = useRef<Array<TouchableOpacity | null>>([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [current, setCurrent] = useState('');

  useEffect(() => {
    dispatch(selectedFilter(current));
    },[current])

  const selectCategory = (index: number, item ) => {
    const selected = itemsRef.current[index];
    setActiveIndex(index);
    setCurrent(item);

    selected?.measure((x) => {
      scrollRef.current?.scrollTo({ x: x, y: 0, animated: true });
    });

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.lightBrown }}>
      <View style={styles.container}>
        <View style={styles.actionRow}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={32}
            color={colors.darkGrey}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <View style={styles.searchBox}>
            <TouchableOpacity
              style={[styles.searchBtn, shadow.dark]}
              onPress={() => {
                navigation.navigate('SearchResults');
              }}
            >
              <MaterialCommunityIcons
                name="text-box-search-outline"
                size={32}
                color={colors.darkGrey}
              />
              <View style={styles.titleBox}>
                <Text style={styles.title}>Пошук</Text>
                <Text style={styles.subTitle}>Поряд з тобою </Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Ionicons
              name="options-outline"
              size={26}
              color={colors.darkGrey}
              style={styles.filterBtn}
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            gap: 10,
            paddingHorizontal: spacing.s - 10,
          }}
        >

          {CATEGORY.map((item: any, index: number) => (
            <TouchableOpacity
              onPress={() => selectCategory(index, item.sleg)}
              key={item.id}
              ref={(el) => (itemsRef.current[index] = el)}
              style={
                activeIndex === index
                  ? styles.categoriesBtnActive
                  : styles.categoriesBtn
              }
            >
              <MaterialCommunityIcons
                name={item.icon as any}
                size={24}
                color={activeIndex === index ? colors.redDark : colors.darkGrey}
              />
              <Text
                style={
                  activeIndex === index
                    ? styles.categoryTextActive
                    : styles.categoryText
                }
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ExploreHeader;

const styles = StyleSheet.create({
  container: {
    height: 130,
    marginHorizontal: spacing.l,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filterBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: colors.darkGrey,
    borderRadius: 24,
  },
  searchBox: {
    flex: 1,
  },
  searchBtn: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: spacing.s,
    marginHorizontal: spacing.s,
    gap: spacing.s,
    borderColor: colors.lightGray,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 50,
    backgroundColor: colors.lightGray,
  },
  titleBox: {
    padding: spacing.s / 2,
  },
  title: {
    fontSize: sizes.h2,
    fontWeight: "bold",
    color: colors.red,
  },
  subTitle: {
    fontSize: sizes.h3,
    color: colors.darkGrey,
  },
  categoryText: {
    fontSize: sizes.body,
    color: colors.darkGrey,
  },
  categoryTextActive: {
    fontSize: sizes.body,
    color: colors.red,
  },
  categoriesBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 0,
  },
  categoriesBtnActive: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBlockEndColor: "#000",
    borderBottomWidth: 2,
    paddingBottom: 8,
  },
});
