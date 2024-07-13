import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import { colors, spacing } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';

const SingUpPage = () => {

  const [registrationData, setRegistrationData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    country: '',
    city: '',
    street: '',
    houseNumber: '',
    password: '',
    repeatPassword: '',
    registrationDate: new Date().toISOString().split('T')[0] ///curront date
  });

  const navigation = useNavigation();

  const insets = useSafeAreaInsets();

  const onHandleLogin = () => {
    console.log(registrationData)
  }

  const handleChange = (key, value) => {
    setRegistrationData({...registrationData, [key]: value})
  }

  return (
    <ScrollView style={{backgroundColor: colors.lightBrown}}>
      <SafeAreaView >
<View style={styles.container}>
        <Image source={require('../../../assets/splash.png')}
            style={styles.image}
        />
        
    <View>
      <Text style={styles.title}>Реєстрація</Text>
      <TextInput
        style={styles.input}
        placeholder="Ім'я"
        autoCapitalize='none'
        keyboardType='email-address'
        textContentType="name"
        autoFocus={false}
        value={registrationData.firstName}
        onChangeText={(text) => handleChange('firstName', text)}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Прізвища"
        autoCapitalize='none'
        keyboardType='default'
        textContentType="name"
        autoFocus={false}
        value={registrationData.lastName}
        onChangeText={(text) => handleChange('lastName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Створіть пароль"
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete='new-password'
        secureTextEntry={true}
        textContentType="password"
        value={registrationData.password}
        onChangeText={(text) => handleChange('password', text)}
      />

<TextInput
        style={styles.input}
        placeholder="Повторіть пароль"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        autoComplete='new-password'
        textContentType="password"
        value={registrationData.repeatPassword}
        onChangeText={(text) => handleChange('repeatPassword', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Пошта"
        autoCapitalize='none'
        keyboardType='email-address'
        textContentType="emailAddress"
        autoFocus={false}
        
        value={registrationData.email}
        onChangeText={(text) => handleChange('email', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Телефон"
        autoCapitalize='none'
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        autoFocus={false}
        value={registrationData.phoneNumber}
        onChangeText={(text) => handleChange('phoneNumber', text)}
        maxLength={10}
      />

      <TouchableOpacity onPress={onHandleLogin} style={styles.submitButton}>
          <Text style={styles.textSubmitButton}>Реєстрація</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Або увійти за допомоги BankID</Text>
    </View> 
    <View>
      <TouchableOpacity  onPress={() => navigation.navigate('SingUpPage')}>
        <Text style={[styles.subTitle,{color: colors.red}]}>Чому так важлива реєстрація та верифікація</Text>
      </TouchableOpacity>
    </View>
    
    </View>
    </SafeAreaView>
    </ScrollView>
    
  )
}

export default SingUpPage;


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: colors.lightBrown,
        paddingHorizontal: spacing.m,
        paddingTop: '10%'
       },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: colors.darkGrey,
        alignSelf: 'center',
        paddingBottom: 14,
        marginHorizontal: 18,
        textAlign: 'center'
    }, 
    subTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.darkGrey,
        alignSelf: 'center',
        paddingBottom: 10, 
        textAlign: 'center'

    },
    form: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30
    },
    input: {
      backgroundColor: colors.Brown,
      height: 58,
      marginBottom: 20,
      fontSize: 16,
      borderRadius: 10,
      padding: 12 
    },
     textSubmitButton: {
       fontWeight: '600',
       color: '#fff',
       fontSize: 18
     },
     submitButton: {
      backgroundColor: colors.red,
      height: 58,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 40,
      marginHorizontal: 20
      

     }, 
     image: {
        width: '100%', 
        height: 100, 
        top: 0, 
        resizeMode: 'cover'}
})


