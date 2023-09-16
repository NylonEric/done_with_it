import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import ErrorMessage from '../components/ErrorMessage';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}></Image>
            <AppTextInput
              icon="email"
              placeholder="email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              onBlur={() => setFieldTouched("email")}
              onChangeText={handleChange("email")}
            />
            <ErrorMessage error={errors.email} visible={touched.email}></ErrorMessage>
            <AppTextInput
              icon="lock"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              textContentType="password"
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
              />
              <ErrorMessage error={errors.password} visible={touched.password}></ErrorMessage>

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
