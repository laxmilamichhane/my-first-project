import React from 'react';
import { View } from 'react-native';
import TitlesName from '../../components/TitlesName';
import styles from './styles';

const App = () => (
  <View style={styles.screen}>
    <TitlesName name="Register your business" />
  </View>
);
export default App;
