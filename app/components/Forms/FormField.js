import React from 'react'

import TextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';

export default function FormField({ name, width, ...otherProps }) {
  const { values, setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]}></ErrorMessage>
    </>
  );
};
