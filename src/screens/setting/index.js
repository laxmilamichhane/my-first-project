import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import SettingBoxes from '../../components/SettingBoxes';

const businessList = [
  {
    image: require('./financial.png'),
    title: 'Business Class 100',
    icon: require('./forward.png'),
  },
  {
    image: require('./wallet.png'),
    title: 'My Premium',
    icon: require('./forward.png'),
  },
  {
    image: require('./heart.png'),
    title: 'Checkup planner',
    icon: require('./forward.png'),
  },
  {
    image: require('./key.png'),
    title: 'Personal data',
    icon: require('./forward.png'),
  },
  {
    image: require('./setup.png'),
    title: 'App setting',
    icon: require('./forward.png'),
  },
  {
    image: require('./info.png'),
    title: 'Information',
    icon: require('./forward.png'),
  },
];
const App = ({ navigation }) => (
  <View style={styles.screen}>
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Page')}>
        <Image source={require('./home.png')} style={styles.home} />
      </TouchableOpacity>
      <View style={{ flexDirection: 'column', marginLeft: 70 }}>
        <Text style={styles.name}>Hello Laxmi</Text>
        <Image source={require('./beautifool.jpg')} style={styles.image} />
        <Text style={styles.nickname}>laxmilamichhane</Text>
        <Text style={styles.address}>Pokhara</Text>
      </View>
    </View>
    <FlatList
      keyExtractor={(item, index) => item.title + index.toString()}
      showsVerticalScrollIndicator={false}
      data={businessList}
      renderItem={({ item, index }) => {
        return (
          <SettingBoxes
            image={item.image}
            title={item.title}
            icon={item.icon}
            onPress={() => navigation.navigate('App settings')}
          />
        );
      }}
    />
  </View>
);
export default App;
