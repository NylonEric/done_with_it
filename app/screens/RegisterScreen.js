import React from 'react'

import Screen from '../components/Screen'
import { styles } from '../styles/styles'
import { Form, FormField, SubmitButton } from '../components/forms';
import { validationSchemaRegister } from '../config/validation';

const RegisterScreen = () => {
  const initialValues={ name: '', email: '', password: '' };

  return (
    <Screen style={styles.screen}>
      <Form
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm({values: ''});
        }}
        validationSchema={validationSchemaRegister}
      >
        <FormField
          name="name"
          icon="account"
          placeholder="Name"
          autoCapitalize="words"
          autoCorrect={false}
          keyboardType="default"
          textContentType="name"
        />
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
        <SubmitButton title="Register" />  
      </Form>
    </Screen>
  )
};

export default RegisterScreen;
