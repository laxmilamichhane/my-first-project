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
    buttoncolor: '#e85288',
    place: 'Pokhara',
  },
  {
    name: 'Laxmi Chhetri',
    relation: 'Bestfriend',
    image: require('./kali.png'),
    intro: 'INTRODUCTION',
    boxcolor: 'orange',
    buttoncolor: 'orange',
    place: 'Pokhara',
  },
  {
    name: 'Aayusha KC',
    relation: 'Bestfriend',
    image: require('./aayu.jpg'),
    intro: 'INTRODUCTION',
    boxcolor: '#e2c961',
    buttoncolor: '#e2c961',
  },
  {
    name: 'Sudha Shrestha',
    relation: 'Sister',
    image: require('./sudha.jpg'),
    intro: 'INTRODUCTION',
    boxcolor: '#f2bc7b',
    buttoncolor: '#f2bc7b',
    place: 'Pokhara',
  },
  {
    name: 'Anmol Basnet',
    relation: 'Brother',
    image: require('./anmol.jpg'),
    des: 'INTRODUCTION',
    boxcolor: 'lightgray',
    buttoncolor: 'lightgray',
    place: 'Aabukhaireni',
  },
  {
    name: 'Reyma Lamichhane',
    relation: 'Sister',
    image: require('./reyma.jpg'),
    des: 'INTRODUCTION',
    boxcolor: '#f4b0c0',
    buttoncolor: '#f4b0c0',
    place: 'Pokhara',
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
