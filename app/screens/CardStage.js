import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../components/Card';

const CardStage = (props) => {
  <View style={{
    height: 200,
    borderColor: "red",
    borderWidth: 2,
  }}>
    <Card 
      title="Red jacket for sale!"
      subtitle={100}
      imageSource="../../app/assets/jacket.jpg"
    />
  </View>
};

const style = StyleSheet.create({
  upperPage: {
    backgroundColor: "blue",
    height: 200,
    borderColor: "red",
    borderWidth: 2,
  }
});

export default CardStage;