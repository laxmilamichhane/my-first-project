import React from 'react';
import { View, Image, Text, FlatList } from 'react-native';

import styles from './styles';
import DiscussThree from '../../components/DiscussThree';
import DiscussList from '../../components/DiscussList';

const meetingList = [
  {
    title: 'Product Planning',
    time: '10:00 AM - 11:30 AM',
    color: '#cdecf7',
    colorr: '#69c9d3',
    images: [
      require('./sudha.jpg'),
      require('./hari.jpg'),
      require('./laxmi.jpg'),
      require('./anju.jpg'),
    ],
  },
  {
    title: 'Design Interaction',
    time: '12:00 PM - 01:30 PM',
    color: '#e0e0e0',
    colorr: '#233672',
    images: [
      require('./back.jpg'),
      require('./kali.jpg'),
      require('./aayu.jpg'),
    ],
  },
  {
    title: 'Development Meetings',
    time: '11:30 AM - 02:00 PM',
    color: '#f9dbf9',
    colorr: '#f76f20',
    images: [require('./kali.jpg'), require('./momos.jpg')],
  },
  {
    title: 'Business Meetings',
    time: '2:30 PM - 3:00 PM',
    color: '#e0e0e0',
    colorr: '#233672',
    images: [require('./niru.jpg')],
  },
];

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
          <Text style={styles.number}>38</Text>
        </View>
        <View style={styles.circle3}>
          <Text style={styles.number3}> 17</Text>
        </View>
      </View>

      <View style={styles.circle}>
        <Text style={styles.number}>25</Text>
      </View>
      <View style={{ flexDirection: 'column', marginLeft: 256, marginTop: 12 }}>
        <DiscussThree color="#f76f20" type="Active" />
        <DiscussThree color="#3551a5" type="Pending" />
        <DiscussThree color="#a1dfe9" type="Completed" />
      </View>
    </View>
    <Text style={styles.datee}>Today, Mon, August 3</Text>

    <FlatList
      keyExtractor={(item, index) => item.title + index.toString()}
      data={meetingList}
      renderItem={({ item, index }) => {
        return (
          <DiscussList
            title={item.title}
            time={item.time}
            image={item.images}
            color={item.color}
            colorr={item.colorr}
          />
        );
      }}
    />
  </View>
);
export default App;
