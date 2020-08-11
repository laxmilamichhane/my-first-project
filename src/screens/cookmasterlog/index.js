import React from 'react';
import { Image, View, Text, TouchableOpacity, ScrollView } from 'react-native';

import styles from './styles';
import InputForm from '../../components/InputForm';
import LoginSignup from '../../components/LoginSignup';

const App = ({ navigation }) => (
  <ScrollView>
    <View style={styles.screen}>
      <Image source={require('./wel.png')} style={styles.pic} />
      <Text style={styles.title}>Welcome back!</Text>

      <InputForm
        image={require('./user.png')}
        selected
        borderColor="#ff6098"
        placeholder="Email/username"
      />
      <InputForm
        image={require('./password.png')}
        isPassword
        placeholder="Enter your password"
      />

      <LoginSignup
        name="Log in"
        bgcolor="#ff6098"
        textcolor="white"
        borderColor="#ff6098"
        onPress={() => navigation.navigate('Recipe')}
      />
      <TouchableOpacity activeOpacity={0.8}>
        <Text
          style={styles.password}
          onPress={() => navigation.navigate('Reset')}>
          Forget Password?
        </Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row' }}>
        <Text style={[styles.password, { marginTop: 66, marginLeft: 90 }]}>
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
    </View>
  </ScrollView>
);
export default App;
