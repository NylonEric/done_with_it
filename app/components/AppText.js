import React from 'react';
import { Text } from 'react-native';
import { styles } from '../styles/styles';

function AppText({style, children}) {
  return <Text style={[styles.appText, style]}>{children}</Text>
};

export default AppText;
