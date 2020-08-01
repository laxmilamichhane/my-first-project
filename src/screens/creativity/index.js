import React from 'react';
import { ScrollView, SafeAreaView, View, Text, Image } from 'react-native';

import MyCreativity from '../../components/MyCreativity';
import styles from './style';

const App = () => (
  <ScrollView>
    <SafeAreaView style={styles.body}>
      <View style={styles.dabba}>
        <Text style={styles.header}> Explore</Text>
        <Text style={styles.header1}> your</Text>
        <Text style={styles.header2}> creativity</Text>
      </View>
      <Image style={styles.img} source={require('./cre.png')} />
      <MyCreativity name="Log in" bgcolor="white" color="blue" />
      <MyCreativity name="Sign up" bgcolor="blue" color="white" />
    </SafeAreaView>
  </ScrollView>
);
export default App;
