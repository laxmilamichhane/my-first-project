import React from 'react';
import { View, ImageBackground, FlatList, Text, Image } from 'react-native';

import styles from './styles';
import RecentSearch from '../../components/RecentSearch';
import SearchBar from '../../components/SearchBar';

const searchList = [
  {
    title: 'sunset',
    icon: require('./forward.png'),
  },
  {
    title: 'mood',
    icon: require('./forward.png'),
  },
  {
    title: 'macbook pro',
    icon: require('./forward.png'),
  },
  {
    title: 'friday scenes',
    icon: require('./forward.png'),
  },
];
const App = ({ navigation }) => (
  <View style={styles.screen}>
    <ImageBackground source={require('./image.png')} style={styles.image}>
      <Text style={styles.title}>ENTER A KEYWORD</Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <Image source={require('./hashtag.png')} style={styles.tag} />
        <SearchBar showIcon onPress={() => navigation.navigate('Result')} />
      </View>
      <Text style={styles.recent}>RECENT SEARCHES</Text>
      <FlatList
        keyExtractor={(item, index) => item.title + index.toString()}
        showsVerticalScrollIndicator={false}
        data={searchList}
        renderItem={({ item, index }) => {
          return <RecentSearch title={item.title} icon={item.icon} />;
        }}
      />
    </ImageBackground>
  </View>
);
export default App;
