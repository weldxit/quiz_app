import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View,Image, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
// Component imports
import Quizes from './quizes';
import Profile from './profile';

// Tab navigation
const Tab = createBottomTabNavigator();

export default function Dashboard() {
    var badge = 3
  return (

    <Tab.Navigator>
      <Tab.Screen
        name='quizes'
        component={Quizes}
        options={{
            tabBarLabel: 'Quizzes',
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={require('../../assets/tab_nav_image/quize.png')}
                  style={{ width: 24, height: 24 }}
                />
              </View>
            ),
            headerShown: false,
          }}
      />
      <Tab.Screen
        name='profile'
        component={Profile}
        options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={require('../../assets/tab_nav_image/profile.png')}
                  style={{ width: 24, height: 24 }}
                />
              </View>
            ),
            headerShown: false,
          }}
      />
    </Tab.Navigator>
 
  );
}

