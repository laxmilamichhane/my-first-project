import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import adventure from './src/screens/adventure';
import adventuretwo from './src/screens/adventuretwo';
import Phonethree from './src/screens/phonethree';
const Stack = createStackNavigator();

const App = () => (
  <SafeAreaView style={{ paddingTop: StatusBar.currentHeight, flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Code" component={adventure} />
        <Stack.Screen name="Adventuretwo" component={adventuretwo} />
        <Stack.Screen name="Fill your information" component={Phonethree} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
);

export default App;
