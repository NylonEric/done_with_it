import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import colors from '../config/colors';

const AppButton = ({title, onPress, style}) => {
  return(
    <Pressable onPress={onPress} style={({ pressed} ) => [
        styles.button,
        style,
        { opacity: pressed ? 0.5 : 1.0 }
      ]}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  }
});

// const AppButton = ({title, onPress, style, color, backgroundColor}) => {
//   console.log('rendered!');
//   return (
//     <Pressable onPress={onPress}>
//       {/* //style={[style, backgroundColor={backgroundColor}]}  */}
//       <View style={[styles.button, style]}>
//         <Text style={styles.buttonTitle}>{title} what what!?</Text>
//       </View>     
//     </Pressable>
//   )
// };

export default AppButton;