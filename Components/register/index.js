import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Confetti from './confetti';
import {
  useTheme
} from '@react-navigation/native';
import { color } from 'react-native-elements/dist/helpers';
export default function RegistrationForm({navigation}) {
  const color = useTheme().colors;
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [school, setSchool] = useState('');
 

  const handleRegistration = () => {
    // Handle registration logic here, e.g., send data to a server
    // You can replace this with your actual implementation
    navigation.navigate('login')
    
   
    console.log('Registration submitted:', { name, age, school });
  };

  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <Text style={[styles.label,  {color:color.text}]}>Name:</Text>
      <TextInput
        style={[styles.input, {color:color.text}]}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      <Text style={[styles.label,  {color:color.text}]}>Age:</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        placeholder="Enter your age"
        keyboardType="numeric"
      />

      <Text style={[styles.label,  {color:color.text}]}>School:</Text>
      <TextInput
        style={styles.input}
        value={school}
        onChangeText={setSchool}
        placeholder="Enter your school"
      />

      <Button title="Register" onPress={handleRegistration} />
    </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 4,

  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});
