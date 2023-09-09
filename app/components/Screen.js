import React from 'react'
import { SafeAreaView } from 'react-native'
import { styles } from '../styles/styles';

export default function Screen({ children }) {
  return (
    <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
  )
};
