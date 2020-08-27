import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import test from './src/screens/test';
import friends from './src/screens/friends';
import friendsprofile from './src/screens/friendsprofile';
import cookmaster from './src/screens/cookmaster';
import cookmasterlog from './src/screens/cookmasterlog';
import cookmastersign from './src/screens/cookmastersign';
import cookrecipe from './src/screens/cookrecipe';
import recipeone from './src/screens/recipeone';
import cookmasterpass from './src/screens/cookmasterpass';
import settingapp from './src/screens/settingapp';
const Stack = createStackNavigator();

const App = () => (
  <SafeAreaView style={{ paddingTop: StatusBar.currentHeight, flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Page"
          component={test}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={friends}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Page2"
          component={friendsprofile}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="_"
          component={cookmaster}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Log in"
          component={cookmasterlog}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Sign up"
          component={cookmastersign}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Recipe"
          component={cookrecipe}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Pancakes"
          component={recipeone}
        />
        <Stack.Screen name="Reset" component={cookmasterpass} />

        <Stack.Screen name="App settings" component={settingapp} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
);
export default App;
