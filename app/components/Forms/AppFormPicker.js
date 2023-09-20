import React from 'react'
import { useFormikContext } from 'formik'

import AppPicker from '../AppPicker'
import { ErrorMessage } from '.'

export default function AppFormPicker({ name, items, placeholder }) {
  const { values, setFieldValue, errors, touched } = useFormikContext();

  return (
    <>
      <AppPicker
        // name={name}
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        // onBlur={() => setFieldTouched(name)}
        // onSelectItem={handleChange(name)}
        // value={values[name]}
        // {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};
