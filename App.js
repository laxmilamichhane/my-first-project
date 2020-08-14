import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import space from './src/screens/space';
import space2 from './src/screens/space2';
import space3 from './src/screens/space3';
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
          component={space}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Page2"
          component={space2}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Redesign"
          component={space3}
        />
        <Stack.Screen name="Settings" component={setting} />
        <Stack.Screen name="Pancakes" component={recipeone} />

        <Stack.Screen name="App settings" component={settingapp} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
);
export default App;
