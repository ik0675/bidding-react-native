import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from './../../constants/Colors'

// Icons
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.PRIMARY }}>
        <Tabs.Screen name='home' options={{ tabBarLabel: 'Home', tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />}}/>
        <Tabs.Screen name='profile' options={{ tabBarLabel: 'Profile', tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />}}/>
        <Tabs.Screen name='explore' options={{ tabBarLabel: 'Explore', tabBarIcon: ({ color }) => <FontAwesome name="search" size={24} color={color} />}}/>
    </Tabs>
  )
}