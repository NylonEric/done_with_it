import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles';

export default function Chevron({ direction }) {
  return (
    <View style={styles.chevron}>
      <MaterialCommunityIcons
        name={direction ? `chevron-${direction}` : "chevron-down"}
        size={25}
        color={defaultStyles.colors.medium}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  chevron: {
    // justifyContent: "center",
    // flexDirection: "row",
    // borderWidth: 1,
    // borderColor: "orange",
  }
})