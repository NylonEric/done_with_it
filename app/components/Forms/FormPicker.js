import React from 'react';
import { useFormikContext } from 'formik';

import Picker from '../Picker';
import ErrorMessage from './ErrorMessage';

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
      <Picker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};
