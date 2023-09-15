import React from 'react';
import { View, Text } from 'react-native';
import Screen from '../components/Screen';
import { styles } from '../styles/styles';

export default function ComponentStage({ children }) {
  return (
    <Screen style={styles.screen}>
      <View>{children}</View>
    </Screen>
  )
};
