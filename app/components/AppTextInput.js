import { View, Text, TextInput} from 'react-native'
import React, { useState } from 'react'
import Screen from './Screen'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AppTextInput() {
  const [firstName, setFirstName] = useState("");
  return (
    <Screen>
      <View>
        <MaterialCommunityIcons name="email" />
        <Text>{firstName}</Text>
        <TextInput
          placeholder="First Name"
          onChangeText={(text) => setFirstName(text)}
          clearButtonMode="always"
          secureTextEntry
          style={{
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
          }}>  
        </TextInput>
      </View>
      
    </Screen>
  )
}