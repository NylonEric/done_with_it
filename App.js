import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FadeInView } from './animations/fade_in_view';
import { styles } from './styles/styles.js';
import { Pulse } from './src/components/circle_pulse';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  Alert,
  Pressable,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
  Button
} from 'react-native';
// import { TouchableHighlight, TouchableNativeFeedback } from 'react-native-web';

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
          {/* <Text style={styles.subtitle}>Open up App.js to start working on your app!</Text> */}
        </View>
        {/* <TouchableOpacity onPress={() => console.log('image pressed!')}>
        {/* <Image fadeDuration={1000} blurRadius={5} style={{width: 100, height: 100, alignSelf: 'center'}} source={require('./assets/icon.png')} /> */}
        {/* <View style={{height: 100, width: 200, backgroundColor: 'dodgerblue', alignSelf: 'center', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.text}>TOUCH ME!</Text>
        </View>
        </TouchableOpacity> */}
      {/* <Button title='Click Me' color='orange' onPress={() => console.log('Button Pressed!')}></Button> */}
      {/* <Button title='Click Me' color='orange' onPress={() => Alert.alert('Button Title', 'Button Pressed!', [
        {text: 'No'},
        {text: 'Yes'},
        {text: 'Maybe?'}
      ])}></Button> */}
      <Button title='Click Me' onPress={() =>
        Alert.prompt('My Prompt', 'My Message', (text) => console.log(text)) //only works on iOS
      }
      />
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
