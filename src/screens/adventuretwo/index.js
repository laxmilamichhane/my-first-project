import React from 'react';
import { View, Image, Text, FlatList, ScrollView } from 'react-native';

import styles from './styles';

import NameTypes from '../../components/NameTypes';
import AdventurePlaces from '../../components/AdventurePlaces';
import AdventureFun from '../../components/AdventureFun';

const placesList = [
  {
    image: [require('./fewa.jpg')],
    name: 'Phewa Lake',
    images: [require('./location.png')],
    bgcolor: '#2aaadd',
    place: 'Pokhara,Lakeside',
  },
  {
    image: [require('./pasu.jpg')],
    name: 'Pashupatinath Temple',
    images: [require('./location.png')],
    bgcolor: '#ff4949',
    place: 'Bagmati,Kathmandu',
  },
  {
    image: [require('./lumbini.webp')],
    name: 'Lumbini',
    images: [require('./location.png')],
    bgcolor: '#ffb55b',
    place: 'Rupandehi District',
  },
  {
    image: [require('./camp.jpg')],
    name: 'Annapurna Base Camp Trek',
    images: [require('./location.png')],
    bgcolor: '#eac888',
    place: 'Annapurna District',
  },
];

const App = ({ navigation }) => (
  <ScrollView>
    <View style={styles.screen}>
      <View>
        <View style={styles.container}>
          <Image source={require('./laxmi.jpg')} style={styles.image} />
          <Image source={require('./menu.png')} style={styles.menu} />
        </View>
        <View>
          <Text style={styles.name}>Hello, Laxmi</Text>
          <Text style={styles.des}>Good morning 🌞</Text>
        </View>
        <Image
          source={{
            uri:
              'https://miro.medium.com/max/1600/1*S1TDAtmZhFVRuqd8mV9buw.gif',
          }}
          style={styles.search}
        />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row' }}>
          <NameTypes type="Popular" color="black" />
          <NameTypes type="Adventure" />
          <NameTypes type="Experience" />
          <NameTypes type="Research" />
        </View>
      </ScrollView>
      <View style={{ height: 300, marginBottom: 26 }}>
        <FlatList
          keyExtractor={(item, index) => item.title + index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={placesList}
          renderItem={({ item, index }) => {
            return (
              <AdventurePlaces
                image={item.image}
                name={item.name}
                images={item.images}
                bgcolor={item.bgcolor}
                place={item.place}
                onPress={() => navigation.navigate('Back')}
              />
            );
          }}
        />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 12,
            height: 80,
          }}>
          <AdventureFun image={require('./camping.png')} name="Camping" />
          <AdventureFun image={require('./hiki.png')} name="Hiking" />
          <AdventureFun image={require('./boat.png')} name="Boating" />
          <AdventureFun image={require('./fish.png')} name="Fishing" />
          <AdventureFun image={require('./swim.png')} name="Swimming" />
        </View>
      </ScrollView>
      <View style={{ marginTop: 20 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'skyblue',
            padding: 8,
            flexDirection: 'row',
            borderTopRightRadius: 18,
            borderTopLeftRadius: 18,
          }}>
          <Image source={require('./home.png')} style={styles.img} />
          <Image source={require('./bell.png')} style={styles.img} />
          <Image source={require('./user.png')} style={styles.img} />
          <Image source={require('./add.png')} style={styles.img} />
        </View>
      </View>
    </View>
  </ScrollView>
);
export default App;
