import React from 'react';
import Screen from '../components/Screen';
import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as FormPicker,
  SubmitButton
} from '../components/forms';
import { validationSchemaListing } from '../config/validation';

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
      <Form
        initialValues={initialValues}
        validationSchema={validationSchemaListing}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm({values: ''});
        }}
      > 
      {/* // TODO: not shift fields with error messages? */}
        <FormField 
          maxLength={255}
          name="title"
          icon=""
          placeholder="Title"
          autoCapitalize="words"
          autoCorrect={true}
          keyboardType="default"
          textContentType="none" 
        />
        <FormField 
          maxLength={10}
          name="price"
          icon=""
          placeholder="Price"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          textContentType="none"
        />
        <FormPicker
          name="category"
          items={categories}
          placeholder="Category"
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberofLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  )
};
