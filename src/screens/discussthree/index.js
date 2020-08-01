import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';
import DiscussThree from '../../components/DiscussThree';
const App = () => (
  <View style={styles.container}>
    <View style={{ flexDirection: 'row' }}>
      <Text style={styles.dots}> ≡ </Text>
      <Image source={require('./laxmi.jpg')} style={styles.image} />
    </View>
    <Text style={styles.meet}>Meetings</Text>
    <View style={{ flexDirection: 'row' }}>
      <View style={styles.pie}>

        <View style={styles.circle2}>
          <Text style={styles.number}>38</Text></View>
        <View style={styles.circle3}>
          <Text style={styles.number3}>  17</Text></View>
      </View >

      <View style={styles.circle}>
        <Text style={styles.number}>25</Text>
      </View>
      <View style={{ flexDirection: 'column', marginLeft: 256, marginTop: 12, }}>
        <DiscussThree color='#f76f20' type='Active' />
        <DiscussThree color='#3551a5' type='Pending' />
        <DiscussThree color='#a1dfe9' type='Completed' />
      </View>
    </View>
  </View >


);
export default App;