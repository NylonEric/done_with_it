import React from 'react';
import { Pressable, View, Text } from 'react-native';
import { styles } from '../../styles/styles';

const CustomButton = ({title, style, color, backgroundColor, pressedColor}
) => {
  return (
    <View style={styles.centerContainer}>
      <Pressable 
      // style={[style, backgroundColor={backgroundColor}]}
       onPress={(e) => {
        console.log('here is event: ', e.nativeEvent);
        }}
        style={({pressed}) => [
          style,
          {
            backgroundColor: pressed ? pressedColor : backgroundColor,
          },
        ]}>
        {({pressed}) => (
          <Text style={styles.buttonTitle}>{title}</Text>
        )}
      </Pressable>
    </View>
  )
};

export default CustomButton;
