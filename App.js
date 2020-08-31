import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import startup from './src/screens/startup';
import startup2 from './src/screens/startup2';
import setting from './src/screens/setting';
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
          component={startup}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Page2"
          component={startup2}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Page3"
          component={setting}
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
