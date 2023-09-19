import React, { useState } from 'react';
import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/Forms';
import { validationSchemaListing } from '../config/validation';
import AppPicker from '../components/AppPicker';
import AppFormPicker from '../components/AppFormPicker';

const categories = [
  {label: "Furniture", value: 1},
  {label: "Clothing", value: 2},
  {label: "Cameras", value: 3}
];

export default function ListingEditScreen() {
  const initialValues = {
    title: '',
    price: '',
    category: '',
    description: '',
  };

  const [category, setCategory] = useState(null);

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
      {/* // TODO: need to not shift fields with error messages? */}
        <AppFormField 
          name="title"
          icon=""
          placeholder="Title"
          autoCapitalize="words"
          autoCorrect={true}
          keyboardType="default"
          textContentType="none" 
        />
        <AppFormField 
          name="price"
          icon=""
          placeholder="Price"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          textContentType="none"
        />
        <AppFormPicker
          label="category"
          selectedItem={category}
          onSelectItem={item => setCategory(item)}
          icon=""
          items={categories}
          placeholder="Category"
        />
        {/* <AppPicker
          label="Cat"
          selectedItem={category}
          onSelectItem={item => setCategory(item)}
          icon=""
          items={categories}
          placeholder="Category"
        /> */}
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  )
};
