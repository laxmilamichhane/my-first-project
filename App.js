import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import pizza from './src/screens/pizza';
import pizzaresult from './src/screens/pizzaresult';
import pizzaresult2 from './src/screens/pizzaresult2';
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
        <Stack.Screen
          options={{ headerShown: false }}
          name="Result"
          component={pizzaresult}
        />
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
