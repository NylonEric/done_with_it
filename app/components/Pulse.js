// inspired by: https://mobiledevtutorials.com/react-native-tinder-loading/

import React, { useEffect, useState } from 'react';
import { styles } from '../styles/styles.js';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  withDelay,
  Easing
} from 'react-native-reanimated';

export const Pulse = ({ delay = 0, repeat }) => {
  const animation = useSharedValue(0);
  useEffect(() => {
    animation.value = withDelay(
      delay,
      withRepeat(
        withTiming(1, {
          duration: 2000,
          easing: Easing.linear,
        }),
        repeat ? -1 : 1,
        false
      )
    );
  }, []);

  const animatedStyles = useAnimatedStyle(() => {
    const opacity = interpolate(
      animation.value,
      [0, 1],
      [0.6, 0],
      Extrapolate.CLAMP
    );
    return {
      opacity: opacity,
      transform: [{ scale: animation.value }],
    };
  });
  return <Animated.View style={[styles.circle, animatedStyles]} />
};
