import { View, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles';
import colors from '../config/colors';
import AppText from './AppText';

export default function ListItem({title, subTitle, image, onPress}) {
  return (
    <TouchableHighlight 
      onPress={onPress}
      underlayColor={colors.light}
      >
      <View style={styles.listContainer}>
        <Image source={image} style={styles.listImage}/>
        <View>
          <AppText style={styles.userTitle}>{title}</AppText>
          <AppText style={styles.userSubTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>    
  )
}