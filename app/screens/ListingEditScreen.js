import { View, Text } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import { AppForm } from '../components/Forms'

export default function ListingEditScreen() {
  const initialValues = {
    title: '',
    price: 0,
    category: '',
    description: '',
  };

  return (
    <Screen>
<AppForm
  initialValues={initialValues}
  validationSchema={validationSchemaListing}
  onSubmit={(values, { resetForm }) => {
    console.log(values);
    resetForm({values: ''});
  }}
>
</AppForm>
    </Screen>
  )
}