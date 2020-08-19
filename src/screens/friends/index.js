import React from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles';

import FriendsList from '../../components/FriendsList';

const infoList = [
  {
    name: 'Anju Lamichhane',
    relation: 'Sister',
    image: require('./anju.jpg'),
    intro: 'INTRODUCTION',
    boxcolor: '#e85288',
    about: 'I am Anju Lamichhane.',
  },
  {
    name: 'Laxmi Chhetri',
    relation: 'Bestfriend',
    image: require('./kali.png'),
    intro: 'INTRODUCTION',
    boxcolor: 'orange',
    about: 'I am Anju Lamichhane.',
  },
  {
    name: 'Aayusha KC',
    relation: 'Bestfriend',
    image: require('./aayu.jpg'),
    intro: 'INTRODUCTION',
    boxcolor: '#e2c961',
    about: 'I am Aayusha KC.',
  },
  {
    name: 'Sudha Shrestha',
    relation: 'Sister',
    image: require('./sudha.jpg'),
    intro: 'INTRODUCTION',
    boxcolor: '#f2bc7b',
    about: 'I am Sudha Shrestha.',
  },
  {
    name: 'Anmol Basnet',
    relation: 'Brother',
    image: require('./anmol.jpg'),
    des: 'INTRODUCTION',
    boxcolor: 'lightgray',
    about: 'I am Anmol Basnet.',
  },
  {
    name: 'Reyma Lamichhane',
    relation: 'Sister',
    image: require('./reyma.jpg'),
    des: 'INTRODUCTION',
    boxcolor: '#f4b0c0',
    about: 'I am Reyma Lamichhane.',
  },
];
const App = ({ navigation }) => (
  <View style={styles.view}>
    <View style={styles.screen}>
      <View style={styles.uppercontainer}>
        <Text style={styles.title}>CONNECTIONS</Text>
      </View>

      <FlatList
        keyExtractor={(item, index) => item.title + index.toString()}
        data={infoList}
        renderItem={({ item }) => {
          return (
            <FriendsList
              name={item.name}
              relation={item.relation}
              image={item.image}
              onPress={() => navigation.navigate('Friendsprofile', item)}
            />
          );
        }}
      />
    </View>
  </View>
);

export default App;
