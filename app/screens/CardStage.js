import React from 'react';
import { View } from 'react-native';
import Card from '../components/Card';
import { styles } from '../../styles/styles';

const CardStage = (props) => {
  return (
    <View style={styles.cardStage}>
      <Card 
        title="Red jacket for sale!"
        subtitle={100}
        imageSource={require("../assets/jacket.jpg")}
      />
    </View>
  )
};

export default CardStage;
