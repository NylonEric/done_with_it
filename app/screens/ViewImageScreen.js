import React from 'react'
import { Image, ImageBackground, View, Text } from 'react-native';
import { styles } from '../styles/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ViewImageScreen(props) {
  return (
    <View style={styles.viewScreenContainer}>
      <View style={styles.viewScreenTopView}>
        <View style={styles.closeMaterialIcon}>
          <MaterialCommunityIcons name="close" size={35} color="white"/>
        </View>
        <View style={styles.deleteMaterialIcon}>
          <MaterialCommunityIcons name="trash-can-outline" size={35} color="white"/>
        </View>
      </View>
        <Image
          style={styles.imageScreenImage}
          resizeMode="contain"
          source={require("../assets/chair.jpg")}
        />
    </View>
  )
};
