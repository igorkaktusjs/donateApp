import * as React from 'react';
import { View, TextInput, Animated, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HeaderTitle  } from '@react-navigation/elements';
import { Ionicons  } from "@expo/vector-icons";
import { colors, sizes, shadow, spacing } from "../../constants/theme";


const SearchBarHeader = () => {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');
  const searchAnimation = React.useRef(new Animated.Value(0)).current;

  const handleSearch = (text) => {
    setSearchText(text);
    // Обробка пошуку
  };

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(searchAnimation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    setSearchText('');
    Animated.timing(searchAnimation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const translateX = searchAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [200, 0],
  });

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      
        <Animated.View style={{ transform: [{ translateX }] }}>
          <TextInput
            placeholder="Search"
            style={{ paddingHorizontal: 10 }}
            onChangeText={handleSearch}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={searchText}
          />
        </Animated.View>
        {!isFocused && (
          <TouchableOpacity onPress={handleFocus}>
            <Ionicons name="search-outline" size={24} color={colors.darkGrey} />
          </TouchableOpacity>
        )}
      
    </View>
  );
};

export default SearchBarHeader;