import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import InputForm from '../../components/InputForm';
import LoginSignup from '../../components/LoginSignup';
import { TouchableOpacity } from 'react-native-gesture-handler';

const App = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Image source={require('./image.png')} style={styles.image} />
      <Text style={styles.text}>Fill the form & create your account</Text>

      <InputForm
        image={require('./user.png')}
        selected
        borderColor="#ff6098"
        placeholder="Name"
        onChangeText={(userInput) => setName(userInput)}
      />
      <InputForm
        image={require('./mail.png')}
        placeholder="Email"
        onChangeText={(userInput) => setEmail(userInput)}
      />
      <InputForm
        image={require('./password.png')}
        isPassword
        placeholder="Password"
        onChangeText={(userInput) => setPassword(userInput)}
      />
      <InputForm
        image={require('./password.png')}
        isPassword
        placeholder="Confirm password"
        onChangeText={(userInput) => setconfirmPassword(userInput)}
      />
      <LoginSignup
        name="Sign up"
        bgcolor="#ff6098"
        textcolor="white"
        borderColor="#ff6098"
        onPress={() =>
          navigation.navigate('Recipe', {
            name,
            email,
            password,
            confirmpassword,
          })
        }
      />

      <View style={{ flexDirection: 'row' }}>
        <Text style={[styles.password, { marginTop: 48, marginLeft: 80 }]}>
          Already have an account?
        </Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text
            style={styles.log}
            onPress={() => navigation.navigate('Log in')}>
            Log in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default App;
