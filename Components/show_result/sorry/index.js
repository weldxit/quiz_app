import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotEligibleCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Sorry, you are not eligible for the next round.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
    flex:1
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default NotEligibleCard;
