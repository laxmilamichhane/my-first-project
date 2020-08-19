import React, { useState } from 'react';
import { Image, View, Text, TouchableOpacity, ScrollView } from 'react-native';

import styles from './styles';
import InputForm from '../../components/InputForm';
import LoginSignup from '../../components/LoginSignup';

const App = ({ navigation }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.screen}>
      <ScrollView>
        <Image source={require('./wel.png')} style={styles.pic} />

        <Text style={styles.title}>Welcome back!</Text>

        <InputForm
          image={require('./user.png')}
          selected
          borderColor="#ff6098"
          placeholder="Email/username"
          onChangeText={(userInput) => setName(userInput)}
        />
        <InputForm
          image={require('./password.png')}
          isPassword
          placeholder="Enter your password"
          onChangeText={(userInput) => setPassword(userInput)}
        />

        <LoginSignup
          name="Log in"
          bgcolor="#ff6098"
          textcolor="white"
          borderColor="#ff6098"
          onPress={() => navigation.navigate('Recipe', { name, password })}
        />
        <TouchableOpacity activeOpacity={0.8}>
          <Text
            style={styles.password}
            onPress={() => navigation.navigate('Reset')}>
            Forget Password?
          </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text style={[styles.password, { marginTop: 114 }]}>
            Don't have an account?
          </Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text
              style={styles.sign}
              onPress={() => navigation.navigate('Sign up')}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default App;
