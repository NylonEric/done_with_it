import React from 'react';
import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/Forms';
import { validationSchemaListing } from '../config/validation';
import AppFormPicker from '../components/AppFormPicker';

const categories = [
  {label: "Furniture", value: 1},
  {label: "Clothing", value: 2},
  {label: "Cameras", value: 3},
];

export default function ListingEditScreen() {
  const initialValues = {
    title: '',
    price: '',
    category: null,
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
      {/* // TODO: not shift fields with error messages? */}
        <AppFormField 
          maxLength={255}
          name="title"
          icon=""
          placeholder="Title"
          autoCapitalize="words"
          autoCorrect={true}
          keyboardType="default"
          textContentType="none" 
        />
        <AppFormField 
          maxLength={10}
          name="price"
          icon=""
          placeholder="Price"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          textContentType="none"
        />
        <AppFormPicker
          name="category"
          items={categories}
          placeholder="Category"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberofLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  )
};
