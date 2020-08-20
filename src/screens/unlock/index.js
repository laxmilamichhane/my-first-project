import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import Unlock from '../../components/Unlock';

const App = () => {
  const [currentPicked, setPicked] = useState();

  return (
    <View style={styles.screen}>
      <Image source={require('./dog.png')} style={styles.image} />
      <Text style={styles.title}>Unlock Everythings</Text>
      <Text style={styles.des}>Daily questions, unlimited projects,</Text>
      <Text style={styles.des}>personal insights and much more!</Text>
      <View style={styles.save}>
        <Text style={{ color: 'white', fontSize: 18 }}> SAVE 50%</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Unlock
          dates="3"
          months="MONTHS"
          numbers="$7.99 / mon"
          dollars="$ 23.99"
          selected={currentPicked === '3M'}
          onPress={() => setPicked('3M')}
        />
        <Unlock
          dates="12"
          months="MONTHS"
          numbers="$3.99 / mon"
          dollars="$ 47.99"
          selected={currentPicked === '12M'}
          onPress={() => setPicked('12M')}
        />
      </View>

      <Text style={styles.des}>Includes 7-day free trial, Cancel before</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 18, marginLeft: 22 }}>August 15</Text>
        <Text style={styles.des}>, and nothing will be billed.</Text>
      </View>
      <View style={styles.inputs}>
        <Text style={styles.signin}>CONTINUE</Text>
      </View>
    </View>
  );
};
export default App;
