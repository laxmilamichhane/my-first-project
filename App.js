import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/home';
import Discuss from './src/screens/discussthree';
import Task from './src/screens/task';
import Creativity from './src/screens/creativitytwo';
import Design from './src/screens/design';
import Advisor from './src/screens/advisor';
import Course from './src/screens/profile';

const Stack = createStackNavigator();

const App = () => (
  <SafeAreaView style={{ paddingTop: StatusBar.currentHeight, flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Discuss" component={Discuss} />
        <Stack.Screen name="Task" component={Task} />
        <Stack.Screen name="Creativity" component={Creativity} />
        <Stack.Screen name="Design" component={Design} />
        <Stack.Screen name="Advisor" component={Advisor} />
        <Stack.Screen name="Course" component={Course} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
);

export default App;
