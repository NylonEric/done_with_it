import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from 'react-native';
import { FadeInView } from './animations/fade_in_view';
import { styles } from './styles/styles.js';
import { Pulse } from './src/components/circle_pulse';

export default App = () => {
  console.log('App executed');
  const [pulse, setPulse] = useState([1]);

  let x = 1;
  x.toString();

  return (
    <SafeAreaView style={styles.container}>
      
      <FadeInView style={styles.container}>
        <View style={styles.topView}>
          <Text style={styles.text}>HELLO WORLD!</Text>
          <Text style={styles.text}>WELCOME TO THE REACT NATIVE APP!</Text>
          <Text style={styles.subtitle}>Open up App.js to start working on your app!</Text>
        </View>
      </FadeInView>
      <View style={styles.bottomView}>
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
      {pulse.map((item, index) => (
        <Pulse key={'unique_key_' + index} repeat={index === 0} />
      ))}
      <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};
