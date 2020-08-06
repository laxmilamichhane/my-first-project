import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Phone from './src/screens/phone';
import Phonetwo from './src/screens/phonetwo';
import Phonethree from './src/screens/phonethree';
const Stack = createStackNavigator();

const App = () => (
  <SafeAreaView style={{ paddingTop: StatusBar.currentHeight, flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Code" component={Phone} />
        <Stack.Screen name="Verification" component={Phonetwo} />
        <Stack.Screen name="Fill your information" component={Phonethree} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
);

export default App;
