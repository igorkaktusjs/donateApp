import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const colors = {
  primary: "#070f18",
  gray: "#8b8989",
  lightGray: "#EAE7DC",
  Brown: "#D8C3A5",
  light: "#fbfbfb",
  white: "#fff",
  black: "#000",
  redDark: "#E85A4F",
  lightBrown: "#EAE7DC",
  darkGrey: "#8E8D8A",
  red: "#E98074",
};

export const shadow = {
  light: {
    elevetion: 2,
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  dark: {
    elevetion: 2,
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  darkTitle: {
    elevetion: 2,
    shadowColor: colors.black,
    shadowRadius: 6,
    shadowOpacity: 0.9,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
};

export const sizes = {
  width,
  height,
  title: 28,
  h2: 22,
  h3: 16,
  body: 14,
  radius: 16,
};

export const spacing = {
  s: 8,
  m: 18,
  l: 24,
  xl: 40,
};
