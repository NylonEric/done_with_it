import React from 'react';

import Screen from '../components/Screen';
import {
  Form,
  FormField,
  FormPicker,
  SubmitButton
} from '../components/forms';
import { validationSchemaListing } from '../config/validation';
import CategoryPickerItem from '../components/CategoryPickerItem';

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
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
          width={120}
        />
        <FormPicker
          name="category"
          items={categories}
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
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
