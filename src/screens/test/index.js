import React from 'react';
import { View, TextInput, Image, Text } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const App = ({ navigation }) => (
  <View style={styles.screen}>
    <Image source={require('./coding.png')} style={styles.image} />
    <Text style={styles.title}>𝖶𝖾𝗅𝖼𝗈𝗆𝖾</Text>
    <Text style={styles.title2}>𝗍𝗈 𝖢𝗈𝖽𝗌𝖾</Text>
    <Text style={styles.des}>Improve your coding skills</Text>

    <View style={styles.inputs}>
      <Text style={styles.signin}>Sign In</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput secureTextEntry style={styles.input} placeholder="Password" />
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => navigation.navigate('Page2')}>
        <View style={styles.button}>
          <Text style={styles.continue}>➜</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.password}>Forget Passsword?</Text>
      <Text style={styles.signup}>Sign Up</Text>
    </View>
  </View>
);
export default App;
