import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import AppText from './AppText'
import defaultStyles from '../config/styles';

export default function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={[ defaultStyles.text, styles.text ]}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

// TODO: combine and abstract styles
const styles = StyleSheet.create({
  text: {
    padding: 20,
  }
});
