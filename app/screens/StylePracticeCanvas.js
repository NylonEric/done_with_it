import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/styles';
import AppText from '../../src/components/AppText';

const StylePracticeCanvas = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.bottomView}>
      <View style={styles.deleteIcon}></View>
      <Text style={{
        fontSize: 30,
        fontStyle: "italic",
        fontWeight: "600",
        color: "pink"
      }}>Hello World</Text>
      <AppText>Goodbye World</AppText>
      </View>
    </View> 
  );

};

export default StylePracticeCanvas;