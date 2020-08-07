import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const App = ({ navigation }) => (
  <View>
    <ImageBackground
      source={{
        uri:
          'https://static.dribbble.com/users/727440/screenshots/6244299/camping.gif',
      }}
      style={styles.img}>
      <View style={{ marginTop: 80, marginBottom: 330 }}>
        <Text style={styles.text}>let's go on</Text>
        <Text style={styles.text}>an adventure</Text>
        <Text style={styles.smalltext}>
          Leave and go where there are no electricity no mobile, networks and
          not many humans.
        </Text>
        <Text style={styles.smalltext}>
          Adventure is waiting for you there.
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => navigation.navigate('Adventuretwo')}>
        <View style={styles.button}>
          <Text style={styles.start}>Get started</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  </View>
);
export default App;
