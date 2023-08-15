import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../styles/styles';

const Card = ({title, subtitle, imageSource}) => {
  <View>
    <Image source={require("../assets/jacket.jpg")} style={styles.image}/>
  </View>
};

export default Card;
