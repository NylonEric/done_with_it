import React, { useState } from 'react'
import { Text, Switch } from 'react-native'
import Screen from './Screen';

export default function AppSwitch() {
  const [isNew, setIsNew] = useState(false);

  return (
    <Screen style={{alignItems: "center", justifyContent: "center"}}>
      <Text>Is on: {isNew ? "Yes" : "No"}</Text>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    </Screen>
  )
}