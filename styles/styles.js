import { StyleSheet, StatusBar, Platform } from 'react-native';
import Constants from 'expo-constants';

import colors from '../app/config/colors';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center'
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: "center"
  },
  container: {
    flex: 1,
    // borderColor: "black",
    // borderRadius: 4,
    flexDirection: 'column',
    backgroundColor:  '#ecf0f1',
    // backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 8,
    // paddingTop: Constants.statusBarHeight,
    paddingTop: Platform.OS === 'Android' ? StatusBar.currentHeight : 0,
    // zIndex: -1,
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#fc5c65',
    // position: 'absolute',
    // top: 40,
    // left: 30
  }, 
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#4ecdc4',
    borderRadius: 1,
    borderTopColor: 'blue',
    borderTopWidth: 5,
    borderTopLeftRadius: 20,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 1,
    elevation: 20,
    // padding: 15,
    margin: 10,
    // position: 'absolute',
    // top: 40,
    // right: 30
  },
  centerContainer: {
    // height: '50%',
    width: '100%',
    // borderColor: 'red',
    // borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 50,
  },
  pressable: {
    // flex: 1,
    color: "white",
    backgroundColor: colors.primary,
    height: 55,
    width: "90%",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    // borderColor: 'red',
    // borderWidth: 2,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  topView: {
    top: 30,
    padding: 20,
    borderColor: 'red',
    borderWidth: 2,
    alignItems: 'center',
    // display: 'flex ',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  bottomView: {
    height: 200,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    // borderColor: 'red',
    // borderWidth: 2,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: "contain"
  },
  textRow: {
    // borderColor: 'red',
    // borderWidth: 2,
    marginTop: 20
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold',
  },
  circle: {
    width: 300,
    borderRadius: 150,
    height: 300,
    position: 'absolute',
    borderColor: '#e91e63',
    borderWidth: 4,
    backgroundColor: '#ff6090',
    // zIndex: -1,
  },
  innerCircle: {
    width: 80,
    borderRadius: 40,
    height: 80,
    zIndex: 100,
    position: 'absolute',
    backgroundColor: 'white',
  }
});
