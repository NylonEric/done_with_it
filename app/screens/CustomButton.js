import React from 'react';
import { Pressable, View, Text } from 'react-native';
import { styles } from '../../styles/styles';

const CustomButton = (props) => {
  return (
    <View style={styles.container}> 
      <View style={styles.centerContainer}>
        <Pressable style={styles.pressable} onPress={(e) => {
          console.log('here is event: ', e.nativeEvent);
        }}>
          <Text style={styles.buttonTitle}>LOGIN</Text>
        </Pressable>
      </View>
    </View>
  )
};

export default CustomButton;