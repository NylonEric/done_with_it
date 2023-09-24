import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from './Icon'
import AppText from './AppText';

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}></Icon>
        <View style={{flexDirection: "row"}}>
          <AppText style={styles.label}>{item.label}</AppText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  }
});

export default CategoryPickerItem;
