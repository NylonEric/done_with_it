import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: '#ff6090'
  }
});
