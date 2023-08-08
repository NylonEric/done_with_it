import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

function AppText(props) {
  return <Text style={styles.text}>{props.children}</Text>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'white',
    fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir"
  }
});

export default AppText;