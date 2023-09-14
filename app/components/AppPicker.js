import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, StyleSheet, Modal, Button, Pressable, FlatList } from 'react-native';
import AppText from './AppText'
import defaultStyles from '../config/styles';
import Screen from './Screen';
import PickerItem from './PickerItem';

export default function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem }) {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <React.Fragment>
      <Pressable onPress={() => setModalVisible(true)}>
        <View style={[styles.container]}>
          {icon && 
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon} 
            />
          }
          <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
          <MaterialCommunityIcons
              name="chevron-down"
              size={20}
              color={defaultStyles.colors.medium}
          />
        </View>
      </Pressable>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)}></Button>
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  onSelectItem(item);
                  setModalVisible(false);
                }} />
            )}
          />
        </Screen>
      </Modal>
    </React.Fragment>
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
  },
  text: {
    flex: 1,
  }
});