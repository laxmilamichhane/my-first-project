import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import styles from './styles';

const App = () => (
  <View>
    <ImageBackground source={require('./d.png')} style={styles.Logo} />
    <View style={styles.container}>
      <Text style={styles.diss}>discussion</Text>
      <Text style={styles.manager}>manager</Text>
    </View>
  </View>
);
export default App;
