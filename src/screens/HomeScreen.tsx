import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React from "react";
import MainHeader from "../components/MainHeader";
import ScreenHeader from "../components/ScreenHeader";
import TopPostsCarousel from "../components/TopPostsCarousel";
import { TOP_POSTS, TOP_CATEGORY } from "../data";
import SectionHeader from "../components/SectionHeader";
import CategoryList from "../components/CategoryList";
import { colors } from "../constants/theme";
import TextBlockWithButton from "../components/TextBlockWithButton";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader title="Donate for Ukraine" />
      <ScreenHeader
        mainTitle="Потрібна допомога"
        secondTitle="Хочете допомогти"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require("../../assets/splash.png")}
          imageStyle={styles.image}
          resizeMode="cover"
        >
          <TopPostsCarousel list={TOP_POSTS} />
          <SectionHeader
            title="Пошук по категоріям"
            onPress={() => {}}
            buttonTitle="Всі категоріЇ"
          />
          <CategoryList list={TOP_CATEGORY} />
        </ImageBackground>
        <TextBlockWithButton
          title="Про наш проєкт"
          description="Наш додаток це хаб для всіх кому потрібна допомога, або хто може допомогти.
           Швидко, зручно та безпечно. Ми створили окреми пошуки по катигоріям з використання геолокацію. Чат в якому ви можете беспечно домовитись про зустпич"
          buttonTitle="Більше інформації"
          onPress={() => {}}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.lightBrown,
    
  },
  image: {
    resizeMode: "cover",
    height: "100%",
    position: "absolute",
    left: "50%",
    top: "57%",
  },
});

export default HomeScreen;
