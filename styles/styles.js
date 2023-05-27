import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    paddingTop: Constants.statusBarHeight,
    zIndex: 1
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: 'black'
  },
  circle: {
    width: 300,
    borderRadius: 150,
    height: 300,
    position: 'absolute',
    borderColor: '#e91e63',
    borderWidth: 4,
    backgroundColor: '#ff6090',
    zIndex: -1,
  },
  innerCircle: {
    width: 80,
    borderRadius: 40,
    height: 80,
    zIndex: 0,
    // zIndex: 100,
    position: 'absolute',
    backgroundColor: 'white',
  }
});
