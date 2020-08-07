import React from 'react';
import { Text, View, ImageBackground } from 'react-native';

import styles from './style';

const App = () => (
  <View style={styles.container}>
    <ImageBackground
      source={{
        uri:
          'https://i.pinimg.com/originals/a8/fc/23/a8fc239ce33cc13277671b0b61dc003e.png',
      }}
      style={styles.image}
    />
    <View style={{ margin: 60, marginBottom: 60 }}>
      <Text style={styles.text}>𝐏𝐄𝐓𝐒 𝐋𝐈𝐅𝐄</Text>
    </View>
  </View>
);
export default App;
