import {
  View,
  Text,
  Pressable,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Alert,
  TouchableNativeFeedback,
  TouchableHighlight,
  Dimensions, } from 'react-native';
import React, { useState } from 'react';
import defaultStyles from '../config/styles';
import { StatusBar } from 'expo-status-bar';
import { FadeInView } from '../animations/fade_in_view';
import { styles } from '../styles/styles';
import { Pulse } from '../components/Pulse';

export default function PulseCircleScreen({ landscape, platform }) {
  const [pulse, setPulse] = useState([1]);

  return (
   <SafeAreaView style={[styles.container, {backgroundColor: 'orange'}]}>
      <FadeInView style={styles.container}>
        <View style={styles.topView}>
          <Text style={styles.text}>HELLO WORLD!</Text>
          <Text style={styles.text}>WELCOME TO THE REACT NATIVE APP!</Text>
          <Text style={[styles.subtitle]}>Open up App.js to start working on your app!</Text>
  {/* image as button: */}
        {/* <TouchableOpacity onPress={() => console.log('image pressed!')}>
          <Image fadeDuration={1000} blurRadius={5} style={{width: 100, height: 100, alignSelf: 'center'}} source={require('../assets/icon.png')} />
          <View style={{height: 100, width: 200, backgroundColor: 'dodgerblue', alignSelf: 'center', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.text}>TOUCH ME!</Text>
          </View>
        </TouchableOpacity> */}
  {/* more buttons: */}
      {/* <Button title='Click Me' color='orange' onPress={() => console.log('Button Pressed!')}></Button> */}
      {/* <Button title='Click Me' color='orange' onPress={() => Alert.alert('Button Title', 'Button Pressed!', [
        {text: 'No'},
        {text: 'Yes'},
        {text: 'Maybe?'}
      ])}></Button> */}
  {/* Alert prompt button: */}
      {/* <Button title='Click Me' onPress={() =>
        Alert.prompt('My Prompt', 'My Message', (text) => console.log(text)) //only works on iOS
      }/> */}
  {/* blue dynamic shape: */}
      {/* <View 
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? "100%" : "30%",
        }}
        ></View> */}
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
