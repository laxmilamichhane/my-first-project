import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

import LoginSignup from '../../components/LoginSignup';

const App = ({ navigation }) => (
  <View style={{ backgroundColor: 'white', flex: 1 }}>
    <Image source={require('./book.png')} style={styles.book} />
    <Text style={styles.title}>Welcome in CookMaster</Text>
    <Text style={styles.des}>
      If you have no idea what to cook, we are here for you. Tell us what you
      have at home and we will give you a recipe
    </Text>

    <LoginSignup
      name="Log in"
      bgcolor="#ff6098"
      textcolor="white"
      borderColor="#ff6098"
      onPress={() => navigation.navigate('Log in')}
    />
    <LoginSignup
      name="Sign up"
      textcolor="gray"
      bgcolor="white"
      borderColor="#d4d4d4"
      onPress={() => navigation.navigate('Sign up')}
    />

    <View style={{ marginTop: 40 }}>
      <Text style={styles.des}>or with social media</Text>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 150,
        }}>
        <Image source={require('./facebook.png')} style={styles.icons} />
        <Image source={require('./insta.png')} style={styles.icons} />
      </View>
    </View>
  </View>
);
export default App;
