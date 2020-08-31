import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal } from 'react-native';

import styles from './styles';

import FriendsList from '../../components/FriendsList';
import Promomodal from '../../components/PromoModal';
import SmallModal from '../../components/SmallModal';
import BuyModal from '../../components/BuyModal';

const infoList = [
  {
    name: 'Anju Lamichhane',
    relation: 'Sister',
    image: require('./anju.jpg'),
    intro: 'INTRODUCTION',
    boxcolor: '#e85288',
    buttoncolor: '#e85288',
    place: 'Pokhara',
    livesin: 'Fulbari',
  },
  {
    name: 'Laxmi Chhetri',
    relation: 'Bestfriend',
    image: require('./kali.png'),
    intro: 'INTRODUCTION',
    boxcolor: 'orange',
    buttoncolor: 'orange',
    place: 'Pokhara',
    livesin: 'Valam',
  },
  {
    name: 'Aayusha KC',
    relation: 'Bestfriend',
    image: require('./aayu.jpg'),
    intro: 'INTRODUCTION',
    boxcolor: '#e2c961',
    buttoncolor: '#e2c961',
    place: 'Pokhara',
    livesin: 'Valam',
  },
  {
    name: 'Sudha Shrestha',
    relation: 'Sister',
    image: require('./sudha.jpg'),
    intro: 'INTRODUCTION',
    boxcolor: '#f2bc7b',
    buttoncolor: '#f2bc7b',
    place: 'Pokhara',
    livesin: 'Manipal',
  },
  {
    name: 'Anmol Basnet',
    relation: 'Brother',
    image: require('./anmol.jpg'),
    intro: 'INTRODUCTION',
    boxcolor: '#d4d4d4',
    buttoncolor: '#d4d4d4',
    place: 'Aabukhaireni',
    livesin: 'Aabukhaireni',
  },
  {
    name: 'Reyma Lamichhane',
    relation: 'Sister',
    image: require('./reyma.jpg'),
    des: 'INTRODUCTION',
    boxcolor: '#f4b0c0',
    buttoncolor: '#f4b0c0',
    place: 'Pokhara',
    livesin: 'Fulbari',
  },
];
const App = ({ navigation }) => {
  const [type, setCardType] = useState('');
  return (
    <View style={styles.screen}>
      <View style={{ flexDirection: 'row-reverse' }}>
        <View
          style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => {
              setCardType('gift');
            }}>
            <View style={styles.box}>
              <Text style={styles.gift}>OFFER 🎉</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => {
              setCardType('buy');
            }}>
            <View style={styles.box}>
              <Text style={styles.gift}>STORE 💰</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => {
              setCardType('offer');
            }}>
            <View style={styles.box}>
              <Text style={styles.gift}>GIFT 🎁</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.uppercontainer}>
          <Text style={styles.title}>CONNECTIONS</Text>
        </View>
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
              onPress={() => navigation.navigate('Page3', item)}
            />
          );
        }}
      />

      <Modal
        visible={type !== ''}
        onRequestClose={() => setCardType('')}
        animationType={type === 'buy' ? 'slide' : 'fade'}
        transparent={true}>
        {type === 'gift' && <SmallModal onClose={() => setCardType('')} />}
        {type === 'buy' && <BuyModal onClose={() => setCardType('')} />}
        {type === 'offer' && <Promomodal onClose={() => setCardType('')} />}
      </Modal>
    </View>
  );
};

export default App;
