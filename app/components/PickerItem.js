import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import AppText from './AppText'
import defaultStyles from '../config/styles';

export default function PickerItem({ label, onPress }) {
  return (
   <TouchableOpacity onPress={onPress}>
    <AppText style={defaultStyles.text}>{label}</AppText>
   </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
  }
});
