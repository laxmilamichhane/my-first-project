import React, { useState } from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import styles from './styles';

const Validate = (name, password) => {
  if (!name) {
    Alert.alert('Email is missing', 'Email is required');
    return false;
  }
  if (!password) {
    Alert.alert('Password is missing', 'Password is required ');
    return false;
  }
  return true;
};

const App = ({ navigation }) => {
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.screen}>
      <Image source={require('./link.png')} style={styles.image} />
      <Text style={styles.title}>𝖶𝖾𝗅𝖼𝗈𝗆𝖾</Text>
      <Text style={styles.title2}>𝗍𝗈 Connector</Text>
      <Text style={styles.des}>Improve your Connection with your friends</Text>

      <View style={styles.inputs}>
        <Text style={styles.signin}>Sign In</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(userInput) => setName(userInput)}
        />
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Password"
          onChangeText={(userInput) => setPassword(userInput)}
        />
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => {
            const result = Validate(name, password);
            if (result === true) {
              setLoading(true);
              setTimeout(() => {
                navigation.navigate('Home');
                setLoading(false);
              }, 1000);
            }
          }}>
          <View style={styles.button}>
            {!isLoading ? (
              <Image source={require('./arrow.png')} style={styles.next} />
            ) : (
              <ActivityIndicator style={styles.next} color="white" />
            )}
          </View>
        </TouchableOpacity>
        <Text style={styles.password}>Forget Passsword?</Text>
        <Text style={styles.signup}>Sign Up</Text>
      </View>
    </View>
  );
};
export default App;
