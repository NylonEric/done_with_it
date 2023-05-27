import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FadeInView } from './animations/fade_in_view';
import { styles } from './styles/styles.js';
import { Pulse } from './src/components/circle_pulse';

export default App = () => {
  console.log('App executed');
 
  let x = 1;
  x.toString();

  return (
    <View style={styles.container}>
       <Image 
          style={styles.innerCircle}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Pulse />
      <FadeInView style={styles.container}>
        <Text style={styles.text}>HELLO WORLD!</Text>
        <Text style={styles.text}>WELCOME TO THE BEST APP EVER!</Text>
        <Text style={styles.subtitle}>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        </FadeInView>
      </View>
  );
}
