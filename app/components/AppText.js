import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import colors from '../config/colors';

function AppText({style, children}) {
  return <Text style={[styles.text, style]}>{children}</Text>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: colors.black,
    fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir"
  }
});

export default AppText;