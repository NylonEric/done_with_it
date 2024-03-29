import React from 'react';
import { Image, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import { Form, FormField, SubmitButton } from '../components/forms';
import { validationSchemaLogin } from '../config/validation';

export default function LoginScreen() {
  const initialValues={ email: '', password: '' };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')}></Image>
      <Form
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm(initialValues);
        }}
        validationSchema={validationSchemaLogin}
      >
        <FormField
          name="email"
          icon="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <FormField
          name="password"
          icon="lock"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          textContentType="password"
          secureTextEntry
        />
        <SubmitButton title="Login" />
      </Form>
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
