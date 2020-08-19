import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import InputForm from '../../components/InputForm';
import LoginSignup from '../../components/LoginSignup';

const App = ({ navigation }) => {
  const [name, setName] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Text style={styles.text}>Forget Password</Text>
      <Text style={styles.des}>
        Enter your Email address associated with your account{' '}
      </Text>
      <Image source={require('./password.png')} style={styles.image} />
      <View style={{ marginBottom: 50 }}>
        <InputForm
          image={require('./user.png')}
          placeholder="Email/Username"
          onChangeText={(userInput) => setName(userInput)}
        />
      </View>
      <LoginSignup
        name="New Password"
        bgcolor="#ff6098"
        textcolor="white"
        borderColor="#ff6098"
      />
      <View style={{ flexDirection: 'row' }}>
        <Text style={[styles.password, { marginTop: 120, marginLeft: 80 }]}>
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
  );
};
export default App;
