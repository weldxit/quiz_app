import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'



// Component imports
import RegistrationForm from './Components/register'
import LoginPage from './Components/login'
import Dashboard from './Components/dashboard'
import TakeExam from './Components/take_quize'
import Result from './Components/show_result'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='register' component={RegistrationForm} options={{headerShown:false }}/>
        <Stack.Screen name='dashboard' component={Dashboard} options={{headerShown:false }}/>
        <Stack.Screen name='login' component={LoginPage} options={{headerShown:false }}/>
        <Stack.Screen name='takeexam' component={TakeExam} options={{headerShown:false }}/>
        <Stack.Screen name='showresult' component={Result} options={{headerShown:false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
