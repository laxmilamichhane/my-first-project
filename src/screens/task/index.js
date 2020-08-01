import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import styles from './style';

const App = () => (
  <View style={styles.dabba}>
    <View style={styles.container}>
      <Text style={styles.first}>Account</Text>
    </View>

    <View style={styles.ftitle}>
      <Text style={styles.title}>✚MΣᗪIᑭIᑕK</Text>
    </View>

    <View style={{ flexDirection: 'row' }}>
      <Text style={styles.welcome}> Ԝelcome </Text>
      <Text style={styles.please}>Please Log in here</Text>
    </View>

    <View style={styles.footer}>
      <Text style={styles.text}>Email</Text>
      <TextInput style={styles.input}> </TextInput>
      <Text style={styles.text}>Password</Text>
      <TextInput style={styles.input}> </TextInput>
      <Text style={styles.forget}>Forget Password?</Text>
      <View style={styles.button}>
        <Button title="Log in" color="#c2100a" />
      </View>
      <View style={styles.buttons}>
        <Button title="Sign up" color="#c2100a" />
      </View>
    </View>
  </View>
);
export default App;
