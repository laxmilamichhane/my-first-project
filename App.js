import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import business from './src/screens/business';
import avatar2 from './src/screens/avatar2';
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
          name="Home"
          component={business}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Page2"
          component={avatar2}
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
