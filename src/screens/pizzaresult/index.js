import React from 'react';
import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native';

import styles from './styles';
import SearchResults from '../../components/SearchResults';

const results = [
  'pizza',
  'pizzatime',
  'pizzalover',
  'food',
  'pizzawithfriends',
  'lovepizza',
  'pizzaday',
  'getpizza',
  'pizzapizzapizza',
  'pizzaday',
  'lovpizza',
  'eatpizza',
  'pizzawithfam',
  'pizzalover',
  'food',
  'pizzaaa',
  'pizzaria',
  'lovepizza',
  'ilovepizza',
  'thankkspizza',
  'pizzafund',
  'deliverpizza',
  'pizzaandcoke',
];

const App = ({ navigation }) => (
  <View style={{ flex: 1, padding: 20, backgroundColor: '#23233D' }}>
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => navigation.navigate('_')}>
        <Image source={require('./undo.png')} style={styles.image} />
      </TouchableOpacity>
      <TextInput style={styles.input} placeholder="Search" />
    </View>

    <View
      style={{
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 40,
      }}>
      {results.map((result) => (
        <SearchResults
          keyExtractor={(item, index) => item.title + index.toString()}
          type={'#' + result}
        />
      ))}
    </View>
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={() => navigation.navigate('Last')}>
      <View style={styles.button}>
        <Text style={styles.copy}>Copy</Text>
      </View>
    </TouchableOpacity>
  </View>
);
export default App;
