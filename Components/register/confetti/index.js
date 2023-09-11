import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Easing } from 'react-native-reanimated'; // Import Easing from 'react-native-reanimated'

const Confetti = () => {
  const numConfetti = 50; // Number of confetti particles
  const confettiColors = ['red', 'blue', 'green', 'yellow', 'purple'];

  const [confettiAnimations] = useState(
    Array.from({ length: numConfetti }).map((_, index) => {
      const translateY = new Animated.Value(0);
      const translateX = new Animated.Value(Math.random() * 300 - 150); // Random horizontal position
      const rotation = new Animated.Value(Math.random() * 360); // Random rotation

      const duration = 4000 + Math.random() * 2000; // Vary the duration
      const delay = Math.random() * 2000; // Add a random delay

      Animated.loop(
        Animated.parallel([
          Animated.timing(translateY, {
            toValue: 500, // Fall down to Y = 500
            duration,
            delay,
            useNativeDriver: false,
            easing: Easing.linear, // Use Easing from 'react-native-reanimated'
          }),
          Animated.timing(translateX, {
            toValue: Math.random() * 300 - 150, // Random horizontal position
            duration,
            delay,
            useNativeDriver: false,
            easing: Easing.linear, // Use Easing from 'react-native-reanimated'
          }),
          Animated.timing(rotation, {
            toValue: Math.random() * 360, // Random rotation
            duration,
            delay,
            useNativeDriver: false,
            easing: Easing.linear, // Use Easing from 'react-native-reanimated'
          }),
        ])
      ).start();

      return {
        translateY,
        translateX,
        rotation,
        color: confettiColors[index % confettiColors.length],
      };
    })
  );

  return (
    <View style={styles.container}>
      {confettiAnimations.map((confetti, index) => (
        <Animated.View
          key={index}
          style={[
            styles.confetti,
            {
              backgroundColor: confetti.color,
              transform: [
                { translateY: confetti.translateY },
                { translateX: confetti.translateX },
                { rotate: `${confetti.rotation}deg` },
              ],
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  confetti: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export default Confetti;
