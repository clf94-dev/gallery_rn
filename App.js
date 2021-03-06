import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen'
import PaintingInfoScreen from './screens/PaintingInfoScreen'

const Stack = createStackNavigator();

export default function App(){
  return(
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown:false}}>
<Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
<Stack.Screen name='Painting' component={PaintingInfoScreen}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer></SafeAreaProvider>
  )
}