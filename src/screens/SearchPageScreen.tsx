import { StyleSheet, View } from "react-native";
import React, { useMemo, useEffect } from "react";
import Listings from "../components/searchPage/Listings";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { colors } from "../constants/theme";
import { useNavigation } from '@react-navigation/native';




const SearchPageScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    const parent = navigation.getParent();

    parent?.setOptions({
      tabBarStyle: { display: 'none' },
    });

    return () => {
      parent?.setOptions({
        tabBarStyle: { display: 'flex' },
      });
    };
  }, [navigation]);

  const allListings = useSelector((state: RootState) => state.listings.allListings);

  const items = useMemo(() => allListings, []);

  return (
    <View style={styles.container}>
      <Listings listings={items} />
  
    </View>
  );
};

export default SearchPageScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightBrown,
    paddingTop: 120,
  },
});
