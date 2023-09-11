import React from 'react'
import { SafeAreaView } from 'react-native'
import { styles } from '../styles/styles';

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
  )
};
