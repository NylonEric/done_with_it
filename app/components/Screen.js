import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import { styles } from '../styles/styles';

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[localStyles.view, style]}>
        {children}
      </View>
    </SafeAreaView>
  )
};

const localStyles = StyleSheet.create({
  view: {
    flex: 1,
  },
});
