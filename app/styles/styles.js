import { StyleSheet, StatusBar, Platform } from 'react-native';
import Constants from 'expo-constants';

import colors from '../config/colors';

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
    // flexDirection: 'column',
    // backgroundColor:  '#ecf0f1',
    backgroundColor: colors.black,
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 8,
    // paddingTop: Constants.statusBarHeight,
    paddingTop: Platform.OS === 'Android' ? StatusBar.currentHeight : 0,
    // zIndex: -1,
  },
  viewScreenContainer: {
    flex: 1,
    backgroundColor: colors.black,
    // borderWidth: 2,
    // borderColor: "purple",
    // padding: 3,
    // margin: 3,
  },
  listContainer: {
    flexDirection: "row",
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#fc5c65',
    // position: 'absolute',
    // top: 40,
    // left: 30
  },
  closeMaterialIcon: {
    // position: 'absolute',
    // top: 40,
    paddingLeft: "10%",
  },
  deleteMaterialIcon: {
    // position: "absolute",
    // top: 40,
    paddingRight: "10%",
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
    color: "white",
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  topView: {
    top: 30,
    padding: 20,
    alignItems: 'center',
    // display: 'flex ',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    // borderColor: 'red',
    // borderWidth: 2,
  },
  viewScreenTopView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "10%",
    //  borderColor: "green",
    // borderWidth: 3,
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
    height: 200,
    width: "100%",
    alignSelf: 'center',
  },
  imageScreenImage: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  listImage: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  userContainer: {
    marginVertical: 50,
    borderWidth: 2,
    borderColor: "pink",
  },
  userTitle: {
    fontSize: 24,
    fontWeight: "500",
  },
  userSubTitle: {
    fontSize: 20,
    color: colors.medium,
  },
  cardStage: {
    backgroundColor: "#ebe9e9",
      height: "45%",
      paddingTop: "15%",
      // borderColor: "red",
      // borderWidth: 2,
  },
  card: {
    margin: "5%",
    // height: "100%",
    borderRadius: "35%",
    overflow: "hidden",
    backgroundColor: "white",
    // borderColor: "green",
    // borderWidth: 2,
  },
  imageContainer: {
    alignContent: "center",
    // height: "80%",
    // borderColor: "blue",
    // borderWidth: 2,
  },
  detailsContainer: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 18,
    // paddingBottom: 7,
    marginBottom: 7
  },
  cardSubtitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.secondary,
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 10,
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
  appText: {
    fontSize: 30,
    color: colors.black,
    fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
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
