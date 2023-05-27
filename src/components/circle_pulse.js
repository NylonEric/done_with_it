// inspired by: https://mobiledevtutorials.com/react-native-tinder-loading/

import * as REACT from 'react';
import { styles } from '../../styles/styles';
import Animated from 'react-native-reanimated';

export const Pulse = () => {
  return <Animated.View style={styles.circle} />;
};
