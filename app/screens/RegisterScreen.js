import { View, Text } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import { styles } from '../styles/styles'
import { AppForm, AppFormField, SubmitButton } from '../components/Forms';
import { validationSchemaRegister } from '../config/validation';

const RegistrerScreen = () => {
  const initialValues={ name: '', email: '', password: '' };

  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm({values: ''});
        }}
        validationSchema={validationSchemaRegister}
      >
        <AppFormField
          name="name"
          icon="account"
          placeholder="Name"
          autoCapitalize="words"
          autoCorrect={false}
          keyboardType="default"
          textContentType="name"
        />
        <AppFormField
          name="email"
          icon="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppFormField
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
      </AppForm>
    </Screen>
  )
};

export default RegistrerScreen;
