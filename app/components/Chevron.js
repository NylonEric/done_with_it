import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles';

export default function Chevron({ direction }) {
  return (
    <MaterialCommunityIcons
      name={direction ? `chevron-${direction}` : "chevron-down"}
      size={25}
      color={defaultStyles.colors.medium}
    />
  )
};
