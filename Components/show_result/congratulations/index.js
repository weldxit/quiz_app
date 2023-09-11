import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CongratulationCard = ({ onRegisterPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Congratulations!</Text>
      <Text style={styles.info}>You are eligible for the next round.</Text>
      <TouchableOpacity onPress={onRegisterPress} style={styles.button}>
        <Text style={styles.buttonText}>Register for Next Round</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
    marginTop:'35%'
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#6b9ef5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CongratulationCard;
