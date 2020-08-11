import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const App = ({ navigation }) => (
  <View>
    <ImageBackground
      source={{
        uri:
          'https://cdn.kimkim.com/files/a/article_images/images/0fafde6abb863cef035ddd1554b5e329137a9bd8/big-278eeb14c6c1b38153a8ca8df6ab6ead.jpg',
      }}
      style={styles.img}>
      <View style={{ marginTop: 50, marginBottom: 330 }}>
        <Text style={styles.text}>𝐥𝐞𝐭'𝐬 𝐠𝐨 𝐨𝐧 𝐚𝐧 𝐚𝐝𝐯𝐞𝐧𝐭𝐮𝐫𝐞</Text>
        <Text style={styles.smalltext}>
          Leave and go where there are no mobile, networks and not many humans.
        </Text>
        <Text style={styles.smalltext}>
          Adventure is waiting for you there.
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => navigation.navigate('Home')}>
        <View style={styles.button}>
          <Text style={styles.start}>Get started</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  </View>
);
export default App;
