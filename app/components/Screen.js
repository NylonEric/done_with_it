import React from 'react'
import { View, SafeAreaView } from 'react-native'
import { styles } from '../styles/styles';

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>
        {children}
      </View>
    </SafeAreaView>
  )
};
