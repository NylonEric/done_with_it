import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

export default function Icon({name, size, backgroundColor, iconColor}) {
  return (
    <View style={{
      width: size || 50,
      height: size || 50,
      borderRadius: size * 0.5 || 25,
      backgroundColor: backgroundColor || colors.black,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <MaterialCommunityIcons
        name={name}
        size={size ? size * 0.5 : 25}
        color={iconColor}
      />
    </View>
  )
};
