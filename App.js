import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FadeInView } from './animations/fade_in_view';

export default App = () => {
  console.log('App executed');
 
  let x = 1;
  x.toString();

  return (
    <View style={styles.container}>
      <FadeInView style={styles.container}>
        <Text style={styles.text}>HELLO WORLD!</Text>
        <Text style={styles.text}>THIS IS THE BEST APP EVER!</Text>
        <Text style={styles.subtitle}>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        </FadeInView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'blue',
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 12,
    color: 'black'
  }
});
