import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { colors, spacing } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const insets = useSafeAreaInsets();

  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      console.log(email);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/splash.png")}
        style={styles.image}
      />
      <SafeAreaView>
        <View>
          <Text style={styles.title}>Логін</Text>

          <TextInput
            style={styles.input}
            placeholder="Ваш логін"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus={false}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Ваш пароль"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={onHandleLogin} style={styles.submitButton}>
            <Text style={styles.textSubmitButton}>Вхід</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Або BankID</Text>
        </View>
        <View>
          <Text style={styles.subTitle}>У вас є профіль?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SingUpPage")}>
            <Text style={[styles.subTitle, { color: colors.red }]}>
              Реєстрація
            </Text>
          </TouchableOpacity>
          <Text
            style={[styles.subTitle, { fontSize: 12, textAlign: "center" }]}
          >
            Для повноцінно використання додатку потрібна реєстрація та
            верифікація{" "}
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBrown,
    paddingHorizontal: spacing.m,
    paddingTop: "30%",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: colors.darkGrey,
    alignSelf: "center",
    paddingBottom: 24,
    marginHorizontal: 18,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.darkGrey,
    alignSelf: "center",
    paddingBottom: 10,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  input: {
    backgroundColor: colors.Brown,
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
  textSubmitButton: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 18,
  },
  submitButton: {
    backgroundColor: colors.red,
    height: 58,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 40,
    marginHorizontal: 20,
  },
  image: {
    width: "100%",
    height: 100,
    top: 0,
    resizeMode: "cover",
  },
});

export default LoginPage;
