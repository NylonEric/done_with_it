import { View, TextInput, StyleSheet, Platform } from 'react-native'
import React, { useState } from 'react'
import Screen from './Screen'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles';

export default function AppTextInput({ icon, ...otherProps }) {
  const [firstName, setFirstName] = useState("");
  return (
    <Screen>
      <View style={styles.container}>
        {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon}/>}
        {/* <Text>{firstName}</Text> */}
        <TextInput
          style={defaultStyles.text} 
          onChangeText={(text) => setFirstName(text)}
          {...otherProps} 
        />
      </View>
      
    </Screen>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  }
});
