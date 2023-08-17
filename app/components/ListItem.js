import { View, Image } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles';
import AppText from './AppText';

export default function ListItem({title, subTitle, image}) {
  return (
    <View style={styles.listContainer}>
      <Image source={image} style={styles.listImage}/>
      <View>
        <AppText style={styles.userTitle}>{title}</AppText>
        <AppText style={styles.userSubTitle}>{subTitle}</AppText>
      </View>
    </View>
  )
}