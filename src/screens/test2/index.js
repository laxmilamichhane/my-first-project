import React from 'react';
import { View, Image, TouchableOpacity, FlatList } from 'react-native';

import styles from './styles';
import ImageList from '../../components/ImageList';

const imageList = [
  {
    image: require('./menu.png'),
    name: 'Overview',
  },
  {
    image: require('./project.png'),
    name: 'Projects',
  },
  {
    image: require('./lesson.png'),
    name: 'Lesson',
  },
  {
    image: require('./exam.png'),
    name: 'Score',
  },
  {
    image: require('./mail.png'),
    name: 'Mailbox',
  },
];
const App = ({ navigation }) => (
  <View style={styles.screen}>
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={() => navigation.navigate('_')}>
      <Image source={require('./rewind.png')} style={styles.image} />
    </TouchableOpacity>
    <Image source={require('./me.jpg')} style={styles.photo} />
    <View style={{ flexDirection: 'row' }}>
      <View style={{ marginTop: 30, backgroundColor: 'black' }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(index, item) => item.name + index.toString()}
          data={imageList}
          renderItem={({ item, index }) => {
            return <ImageList name={item.name} image={item.image} />;
          }}
        />
      </View>
    </View>
  </View>
);
export default App;
