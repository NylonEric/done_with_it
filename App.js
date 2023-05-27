import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { FadeInView } from './animations/fade_in_view';
import { styles } from './styles/styles.js';
import { Pulse } from './src/components/circle_pulse';

export default App = () => {
  console.log('App executed');
  const [pulse, setPulse] = useState([1]);

  let x = 1;
  x.toString();

  return (
    <View style={styles.container}>
      
      <FadeInView style={styles.container}>
        <Pressable 
          style={styles.innerCircle}
          onPress={() => {
            setPulse((prev) => [...prev, Math.random()]);
          }}>
          <Image
            style={styles.innerCircle}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          /> 
        </Pressable>
        {pulse.map((item, index) => {
          <Pulse repeat={index === 0} />
        })}
        <Text style={styles.text}>GOODBYE CANDICE!</Text>
        <Text style={styles.text}>HAVE A GREAT WEEKEND!</Text>
        <Text style={styles.subtitle}>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        </FadeInView>
      </View>
  );
}
