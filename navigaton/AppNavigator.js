import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import MainScreen from '../screens/MainScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false, 
    }}>
        <Stack.Screen name="Home" component={MainScreen} />
        
    </Stack.Navigator>  )
}

export default AuthNavigator