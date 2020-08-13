import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import pizza from './src/screens/pizza';
import cookmasterlog from './src/screens/cookmasterlog';
import cookmastersign from './src/screens/cookmastersign';
import cookmasterpass from './src/screens/cookmasterpass';
import cookrecipe from './src/screens/cookrecipe';
import setting from './src/screens/setting';
import recipeone from './src/screens/recipeone';
import settingapp from './src/screens/settingapp';
const Stack = createStackNavigator();

const App = () => (
  <SafeAreaView style={{ paddingTop: StatusBar.currentHeight, flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="_"
          component={pizza}
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
        <Stack.Screen name="Setting" component={setting} />
        <Stack.Screen name="App settings" component={settingapp} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
);
export default App;
