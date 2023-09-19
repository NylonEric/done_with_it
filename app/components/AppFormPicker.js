import { View, Text } from 'react-native'
import React from 'react'
import AppPicker from './AppPicker'
import { useFormikContext } from 'formik'
import { ErrorMessage } from './Forms'

export default function AppFormPicker({ name, ...otherProps}) {
  const { values, setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppPicker
        onBlur={() => setFieldTouched(name)}
        // onSelectItem={handleChange(name)}
        // value={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};
