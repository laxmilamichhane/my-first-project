import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const App = ({ route }) => {
  const { name, image } = route.params;
  console.log(route);
  return (
    <View style={styles.screen}>
      <Text style={styles.name}>{name || 'Me'}</Text>
      <Image source={ image || require('./taa.jpg')} style={styles.image} />
    </View>
  );
};
export default App;
