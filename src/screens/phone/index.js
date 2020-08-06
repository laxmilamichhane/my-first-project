import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import { TextInput, ScrollView } from 'react-native-gesture-handler';

import PhoneButton from '../../components/PhoneButton';

const App = ({ navigation }) => (
  <ScrollView>
    <View syle={styles.screen}>
      <Text style={styles.title}>Continue With Phone</Text>
      <Text style={styles.text}>We will send One Time Password</Text>
      <Text style={styles.text}>on this phone number</Text>
      <Image source={require('./mobile.png')} style={styles.image} />
      <Text style={{ color: 'gray', marginTop: 20, textAlign: 'center' }}>
        Enter your phone number
      </Text>
      <TextInput style={styles.inputbox} keyboardType="number-pad">
        +977
      </TextInput>

      <PhoneButton
        name="SEND OTP"
        onPress={() => navigation.navigate('Verification')}
      />
    </View>
  </ScrollView>
);
export default App;
