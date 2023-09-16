import React from 'react'

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';

export default function AppFormField({ name, ...otherProps }) {
  const { values, setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        value={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]}></ErrorMessage>
    </>
  );
};
