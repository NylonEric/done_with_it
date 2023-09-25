import React, { useState } from 'react';
import {
  Platform,
  useWindowDimensions
} from 'react-native';
// import { TouchableHighlight, TouchableNativeFeedback } from 'react-native-web';
import { useDeviceOrientation } from '@react-native-community/hooks'; //useDimensions is deprecated
import Screen from './app/components/Screen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import StylePracticeCanvas from './app/screens/StylePracticeCanvas';
import Button from './app/components/Button';
import CardStage from './app/screens/CardStage';
import ListDetailScreen from './app/screens/ListDetailScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import IconCanvas from './app/screens/IconCanvas';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import TextInput from './app/components/TextInput';
import Switch from './app/components/Switch';
import Picker from './app/components/Picker';
import ComponentStage from './app/screens/ComponentStage';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import PulseCircleScreen from './app/screens/PulseCircleScreen';

export default App = () => {
  console.log('App executed');

  // let x = 1;
  // x.toString();
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
      <PulseCircleScreen landscape={landscape} platform={platform}/>
      {/* <WelcomeScreen/> */}
      {/* <ViewImageScreen/> */}
      {/* <StylePracticeCanvas/> */}
      {/* <Button title="Login" onPress={() => console.log('here is button')}/> */}
      {/* <CardStage/> */}
      {/* <ListDetailScreen/> */}
      {/* <IconCanvas/> */}
      {/* <MessagesScreen/> */}
      {/* <AccountScreen/> */}
      {/* <ListingsScreen /> */}
      {/* <Switch /> */}
      {/* <ComponentStage>
        <Picker
          selectedItem={category}
          onSelectItem={item => setCategory(item)}
          icon="apps"
          items={categories}
          placeholder="Category" />
        <TextInput
          icon="email"
          placeholder="First Name"
          // keyboardType='default'
          // clearButtonMode="always"
          // secureTextEntry 
        />
      </ComponentStage> */}
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
      {/* <ListingEditScreen /> */}
    </GestureHandlerRootView>
  );
};
