import React, { useState } from 'react'
import { View, Text, Switch } from 'react-native'

export default function AppSwitch() {
  const [isNew, setIsNew] = useState(false);

  return (
    <View>
      <Text>Is on: {isNew ? "Yes" : "No"}</Text>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    </View>
  )
}