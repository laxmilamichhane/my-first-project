import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';

import styles from './styles';
import PhotoGallery from '../../components/PhotoGallery';
import SpaceBoxes from '../../components/SpaceBoxes';
import { TouchableOpacity } from 'react-native-gesture-handler';

const dataList = [
  {
    title: 'Develop an idea for',
    title2: 'Amber website',
    day: '3d',
    bgcolor: '#ff613a',
    type: 'Prototype',
    typecolor: '#fa6b46',
    boxcolor: '#f7c3c3',
    name: 'Aayusha Kc',
    img: require('./aayu.jpg'),
  },
  {
    title: 'Structure the prototype',
    title2: 'and logic for Bleam',
    day: '2d',
    bgcolor: '#0cd6b7',
    type: 'UX Design',
    typecolor: '#ffb028',
    boxcolor: '#f9e3c7',
    name: 'Anju Kshetri',
    img: require('./anju.jpg'),
    bdrwidth: 1,
  },
  {
    title: 'Redesign content for',
    title2: 'SMEG website',
    day: '5d',
    bgcolor: '#ff613a',
    type: 'UI Interface',
    typecolor: '#0cd6b7',
    boxcolor: '#d5e5e8',
    name: 'Sudha Shrestha',
    img: require('./sudha.jpg'),
    bdrwidth: 1,
  },
  {
    title: 'Brainstorming with our',
    title2: 'marketing agency',
    day: '7d',
    bgcolor: '#21b744',
    type: 'Animation',
    typecolor: '#eaaf00',
    boxcolor: '#fcff7c',
    name: 'Laxmi Lamichhane',
    img: require('./laxmi.jpg'),
    bdrwidth: 1,
  },
];
const picList = [
  {
    images: [
      require('./aayu.jpg'),
      require('./anju.jpg'),
      require('./sudha.jpg'),
      require('./plus.png'),
    ],
  },
];
const App = ({ navigation }) => (
  <View style={styles.screen}>
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => navigation.navigate('_')}>
        <Image source={require('./rewind.png')} style={styles.image} />
      </TouchableOpacity>
      <Image source={require('./search.png')} style={styles.image} />
    </View>
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.title}>Design</Text>
        <FlatList
          keyExtractor={(item, index) => item.title + index.toString()}
          data={picList}
          renderItem={({ item, index }) => {
            return <PhotoGallery image={item.images} />;
          }}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.progress}>IN PROGRESS ❸</Text>
        <Text style={styles.dots}>...</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.title + index.toString()}
        data={dataList}
        renderItem={({ item, index }) => {
          return (
            <SpaceBoxes
              title={item.title}
              title2={item.title2}
              day={item.day}
              bgcolor={item.bgcolor}
              type={item.type}
              boxcolor={item.boxcolor}
              typecolor={item.typecolor}
              name={item.name}
              img={item.img}
              bdrwidth={item.bdrwidth}
              onPress={() => navigation.navigate('Redesign')}
            />
          );
        }}
      />
    </View>
  </View>
);
export default App;
