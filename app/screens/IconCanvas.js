import React from 'react'
import { View, Text } from 'react-native'
import Icon from '../components/Icon';
import Screen from '../components/Screen';

export default function IconCanvas() {
  return (
    <Screen style={{justifyContent: "center", alignItems: "center"}}>
      <Icon
        name="email"
        size={50}
        backgroundColor="red"
        iconColor="white"
        />
    </Screen>
  )
};
