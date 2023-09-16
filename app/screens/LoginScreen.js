import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}></Image>
            <AppTextInput
              icon="email"
              placeholder="email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
            />
            <AppText style={{ color: "red"}}>{errors.email}{errors.password}</AppText>
            <AppTextInput
              icon="lock"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              textContentType="password"
              secureTextEntry
              onChangeText={handleChange("password")}
              />
            <AppButton title="Login" onPress={handleSubmit}/>
          </>
        )}
      </Formik>
    </Screen>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  }
});
