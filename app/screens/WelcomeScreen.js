import React from 'react';
import { Image, ImageBackground, View, Text } from 'react-native';
import AppButton from '../components/AppButton';
import { styles } from '../styles/styles';
import colors from '../config/colors';

const WelcomeScreen = (props) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
      blurRadius={5}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo}/>
        <View style={styles.textRow}>
          <Text style={styles.subtitle}>Sell What You Don't Need</Text>
        </View>
      </View>
      <View style={styles.bottomView}>
        <AppButton title="LOGIN" style={styles.pressable} color="white" backgroundColor={colors.primary}/>
        <AppButton title="REGISTER" style={styles.pressable} color="white" backgroundColor={colors.secondary}/>
      </View>
     </ImageBackground>
  );
};

export default WelcomeScreen;