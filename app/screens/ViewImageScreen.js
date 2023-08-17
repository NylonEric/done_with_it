import React from 'react'
import { Image, ImageBackground, View, Text } from 'react-native';
import { styles } from '../styles/styles';

export default function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}>
          <View style={{
            backgroundColor: 'gold',
            width: 25,
            height: 25,
          }}></View>
        </View>
      </View>
      <View styles={styles.bottomView}>
        <View style={styles.deleteIcon}></View>

        <View style={{
            backgroundColor: "tomato",
            width: 50,
            height: 50,
            margin: 20,
          }}></View>
      </View>
      <Image
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  )
}
