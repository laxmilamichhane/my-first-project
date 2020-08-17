import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const App = ({ navigation }) => (
  <View style={styles.screen}>
    <View style={{ flexDirection: 'row' }}>
      <Image source={require('./slack.png')} style={styles.logo} />
      <Text style={styles.logoname}>Oneder</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Settings')}>
        <Image source={require('./menu.png')} style={styles.menu} />
      </TouchableOpacity>
    </View>
    <Text style={styles.title}>𝗢𝗻𝗲 𝘀𝗽𝗮𝗰𝗲</Text>
    <Text style={styles.title}>𝘁𝗼 𝗿𝘂𝗹𝗲 𝘁𝗵𝗲𝗺 𝗮𝗹𝗹</Text>
    <Text style={styles.des}>
      We bring all your team's content together while letting you use the tools
      you love.
    </Text>
    <Image source={require('./ss.png')} style={styles.image} />
    <View style={{ flexDirection: 'row-reverse' }}>
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => navigation.navigate('Page2')}>
        <View style={styles.button}>
          <Text style={styles.textt}>READ</Text>
          <Text style={styles.textt}>MORE</Text>
        </View>
      </TouchableOpacity>
      <Image source={require('./pp.png')} style={styles.image2} />
    </View>
  </View>
);
export default App;
