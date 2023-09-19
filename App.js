import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FadeInView } from './animations/fade_in_view';
import { styles } from './app/styles/styles.js';
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
  Button,
  Dimensions,
  useWindowDimensions
} from 'react-native';
// import { TouchableHighlight, TouchableNativeFeedback } from 'react-native-web';
import { useDeviceOrientation } from '@react-native-community/hooks'; //useDimensions is deprecated
import Screen from './app/components/Screen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import StylePracticeCanvas from './app/screens/StylePracticeCanvas';
import AppButton from './app/components/AppButton';
import CardStage from './app/screens/CardStage';
import ListDetailScreen from './app/screens/ListDetailScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import IconCanvas from './app/screens/IconCanvas';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import TextInput from './app/components/AppTextInput';
import AppTextInput from './app/components/AppTextInput';
import AppSwitch from './app/components/AppSwitch';
import AppPicker from './app/components/AppPicker';
import ComponentStage from './app/screens/ComponentStage';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default App = () => {
  console.log('App executed');
  const [pulse, setPulse] = useState([1]);

  // let x = 1;
  // x.toString();
  // console.log('here are device dimensions: ', Dimensions.get('screen')); // doesn't handle orientation changes
  const landscape = useDeviceOrientation() === 'landscape';
  const platform = Platform.OS;
  console.log(`platform: ${platform}\nhere are device dimensions:\nlandscape: ${landscape}\n`, useWindowDimensions()); // handles orientation changes

  const categories = [
    {label: "Furniture", value: 1},
    {label: "Clothing", value: 2},
    {label: "Cameras", value: 3}
  ];
const [category, setCategory] = useState(categories[0])
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {/* <WelcomeScreen/> */}
      {/* <ViewImageScreen/> */}
      {/* <StylePracticeCanvas/> */}
      {/* <AppButton title="Login" onPress={() => console.log('here is button')}/> */}
      {/* <CardStage/> */}
      {/* <ListDetailScreen/> */}
      {/* <IconCanvas/> */}
      {/* <MessagesScreen/> */}
      {/* <AccountScreen/> */}
      {/* <ListingsScreen /> */}
      {/* <AppSwitch /> */}
      {/* <ComponentStage>
        <AppPicker
          selectedItem={category}
          onSelectItem={item => setCategory(item)}
          icon="apps"
          items={categories}
          placeholder="Category" />
        <AppTextInput
          icon="email"
          placeholder="First Name"
          // keyboardType='default'
          // clearButtonMode="always"
          // secureTextEntry 
        />
      </ComponentStage> */}
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
      <ListingEditScreen />
    </GestureHandlerRootView>

    // TODO: pulse circle component: extract to components 
    // <SafeAreaView style={[styles.container, {backgroundColor: 'orange'}]}>
    //   <FadeInView style={styles.container}>
    //     <View style={styles.topView}>
    //       <Text style={styles.text}>HELLO WORLD!</Text>
    //       <Text style={styles.text}>WELCOME TO THE REACT NATIVE APP!</Text>
    //       {/* <Text style={styles.subtitle}>Open up App.js to start working on your app!</Text> */}
        
    //     {/* <TouchableOpacity onPress={() => console.log('image pressed!')}>
    //     {/* <Image fadeDuration={1000} blurRadius={5} style={{width: 100, height: 100, alignSelf: 'center'}} source={require('./assets/icon.png')} /> */}
    //     {/* <View style={{height: 100, width: 200, backgroundColor: 'dodgerblue', alignSelf: 'center', alignItems: 'center', justifyContent: 'center'}}>
    //       <Text style={styles.text}>TOUCH ME!</Text>
    //     </View>
    //     </TouchableOpacity> */}
    //   {/* <Button title='Click Me' color='orange' onPress={() => console.log('Button Pressed!')}></Button> */}
    //   {/* <Button title='Click Me' color='orange' onPress={() => Alert.alert('Button Title', 'Button Pressed!', [
    //     {text: 'No'},
    //     {text: 'Yes'},
    //     {text: 'Maybe?'}
    //   ])}></Button> */}
    //   {/* <Button title='Click Me' onPress={() =>
    //     Alert.prompt('My Prompt', 'My Message', (text) => console.log(text)) //only works on iOS
    //   }/> */}
    //   <View 
    //     style={{
    //       backgroundColor: "dodgerblue",
    //       width: "100%",
    //       height: landscape ? "100%" : "30%",
    //     }}
    //     ></View>
    //     </View>
    //   </FadeInView>
    //   {/* <View style={styles.bottomView}>
    //   <Pressable 
    //     style={styles.innerCircle}
    //     onPress={() => {
    //       setPulse((prev) => [...prev, Math.random()]);
    //     }}>
    //     <Image
    //       style={styles.innerCircle}
    //       source={{
    //         uri: 'https://reactnative.dev/img/tiny_logo.png',
    //       }}
    //     /> 
    //   </Pressable>
    //   {pulse.map((item, index) => (
    //     <Pulse key={'unique_key_' + index} repeat={index === 0} />
    //   ))}
    //   <StatusBar style="auto" />
    //   </View> */}
    // </SafeAreaView>
  );
};
