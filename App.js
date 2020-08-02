import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Course from './src/screens/food';

const App = () => (
  <SafeAreaView style={{ paddingTop: StatusBar.currentHeight, flex: 1 }}>
    <Course />
  </SafeAreaView>
);

export default App;
