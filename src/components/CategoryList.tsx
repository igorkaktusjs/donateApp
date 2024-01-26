import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors, sizes, shadow, spacing } from '../constants/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const CARD_WIDTH = sizes.width / 3 - ((spacing.l + spacing.l / 2) -4);
const CARD_HEIGHT = 90;

const CategoryList = ({list}) => {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        {list.map((item, index) => {
            return (
                <TouchableOpacity  
                    key={item.id} 
                    style={styles.cardContainer}
                    onPress={() => {
                        navigation.navigate('PostDetails', {post: item})
                    }}
                    >
                    <View  style={[styles.card, shadow.light]} >
                    <View style={styles.imageBox}>
                        <Image style={styles.image} source={item.image}/>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.titleBox} >
                            <Text style={[styles.title, shadow.dark]}>{item.title}</Text>
                        </View>
                    </View>
                </View>
                </TouchableOpacity>
            )
        })}
    </View>
  )
}

export default CategoryList

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        backgroundColor: colors.white, 
        borderRadius: sizes.radius,
        
    },
    imageBox: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT - 30,
        borderTopLeftRadius: sizes.radius,
        borderTopRightRadius: sizes.radius,
        overflow: 'hidden',
    }, 
    image: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT - 30,
        resizeMode: 'cover'
    },
    cardContainer: {
        marginLeft: spacing.l,
        marginBottom: spacing.l,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: spacing.m / 3,
        marginLeft: spacing.s - 2,
        marginRight: 0,
        
    },
    titleBox: {

    },
    title: {
        fontSize: sizes.body-1,
        color: colors.darkGrey,
        fontWeight: 'bold',
        
    }
})