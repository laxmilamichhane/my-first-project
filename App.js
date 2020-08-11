import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import cookmaster from './src/screens/cookmaster';
import cookmasterlog from './src/screens/cookmasterlog';
import cookmastersign from './src/screens/cookmastersign';
import cookmasterpass from './src/screens/cookmasterpass';
import cookrecipe from './src/screens/cookrecipe';
import advisor from './src/screens/advisor';
import recipeone from './src/screens/recipeone';
import profile from './src/screens/profile';
const Stack = createStackNavigator();

const App = () => (
  <SafeAreaView style={{ paddingTop: StatusBar.currentHeight, flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="_"
          component={cookmaster}
        />
        <Stack.Screen name="Log in" component={cookmasterlog} />
        <Stack.Screen name="Sign up" component={cookmastersign} />
        <Stack.Screen name="Reset" component={cookmasterpass} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Recipe"
          component={cookrecipe}
        />
        <Stack.Screen name="Pancakes" component={recipeone} />
        <Stack.Screen name="Advisor" component={advisor} />
        <Stack.Screen name="Profile" component={profile} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
);

export default App;
