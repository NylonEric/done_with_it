import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Icon = ({name, size, color}) => {
  return (
    <View>
      <MaterialCommunityIcons name={name} size={size} color={color}/>
    </View>
  )
};

export default Icon;
