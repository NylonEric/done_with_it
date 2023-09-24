import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles/styles';
import AppText from './Text';

const Card = ({title, subtitle, imageSource}) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} resizeMode='cover'/>
      </View>
      <View style={styles.detailsContainer}>
        <AppText style={styles.cardTitle}>{title}</AppText>
        <AppText style={styles.cardSubtitle}>{subtitle}</AppText>
      </View>
    </View>
  )
};

export default Card;
