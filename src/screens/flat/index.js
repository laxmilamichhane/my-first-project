import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

import styles from './styles';

import AllList from '../../components/AllList';

const subjectList = [
  {
    title: 'Chemistry',
    dis: 'Human Experience',
    color: '#cdecf7',
    image: [require('./sc.png')],
  },
  {
    title: 'Physics',
    dis: 'Material Universe',
    color: '#97a3fc',
    image: [require('./einstein.png')],
  },
  {
    title: 'Biology',
    dis: 'Living Organisms',
    color: '#91ff93',
    image: [require('./microscope.png')],
  },
  {
    title: 'Zoology',
    dis: 'Animals',
    color: '#6edda6',
    image: [require('./sloth.png')],
  },
  {
    title: 'Maths',
    dis: 'Number Theory',
    color: '#adadad',
    image: [require('./calculator.png')],
  },
  {
    title: 'English',
    dis: 'Langauge',
    image: [require('./english.png')],
    color: 'pink',
  },
];

const App = () => (
  <View style={styles.screen}>
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Image source={require('./ss.png')} style={styles.img} />
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.text}>BOOK</Text>
          <Text style={styles.text}>HUB</Text>
        </View>
      </View>

      <Text style={styles.quote}>
        There are many little ways to enlarge your world. Love of books is the
        best of all.
      </Text>
    </View>

    <FlatList
      data={subjectList}
      renderItem={({ item, index }) => {
        return (
          <AllList
            title={item.title}
            dis={item.dis}
            image={item.image}
            color={item.color}
          />
        );
      }}
    />
  </View>
);
export default App;
