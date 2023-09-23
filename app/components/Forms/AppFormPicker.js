import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';
import PickerItem from '../PickerItem';

export default function AppFormPicker({
  name,
  items,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width
}) {
  const { values, setFieldValue, errors, touched } = useFormikContext();

  return (
    <>
      <AppPicker
        // name={name}
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        // onBlur={() => setFieldTouched(name)}
        // onSelectItem={handleChange(name)}
        // value={values[name]}
        // {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};
