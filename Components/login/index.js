import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation from React Navigation

export default function LoginPage() {
  const { navigate } = useNavigation(); // Get the navigation function

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // You should implement actual authentication logic here
    // For this example, we'll just simulate a successful login
  
     navigate('dashboard'); // Navigate to the dashboard screen
   
  };

  const handleRegister = () => {
    // Navigate to the registration screen when the "Register" text is clicked
    navigate('register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry={true}
      />

      <Button title="Login" onPress={handleLogin} />

      {/* Add a "Register" text below the button */}
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
    </View>
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
  registerText: {
    marginTop: 16,
    fontSize: 16,
    color: 'blue', // You can style the text as needed
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
