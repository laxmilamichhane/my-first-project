import React from 'react';
import { View, ScrollView, Text } from 'react-native';

import styles from './styles';
import PhoneForm from '../../components/PhoneForm';
import PhoneButton from '../../components/PhoneButton';

const App = () => (
  <ScrollView>
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Your Information</Text>
      <View style={styles.form}>
        <PhoneForm name="Your Name" />
        <PhoneForm name="Email" />
        <PhoneForm name="Phone Number" />
        <PhoneForm name="Your Address" showIcon />
      </View>
      <PhoneButton name="NEXT" txtcolor="#21b744" color="#c3e0d1" />
    </View>
  </ScrollView>
);
export default App;
