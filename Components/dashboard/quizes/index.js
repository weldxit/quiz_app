import React from 'react'
import { Text , ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import QuizCard from './quize_card';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import QuizeList from './quizelist';
import RegisterQuize from './register';


const Stack = createNativeStackNavigator()
export default function Quizes(){

    return(
        <Stack.Navigator>
            <Stack.Screen name='quizelist' component={QuizeList} options={{headerShown:false}}/>
            <Stack.Screen name='registerquize' component={RegisterQuize} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });