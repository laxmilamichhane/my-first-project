import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
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
    <Text style={styles.name}>Hello Laxmi</Text>
    <Image source={require('./lyx.jpg')} style={styles.image} />
    <Text style={styles.nickname}>laxmilamichhane</Text>
    <Text style={styles.address}>Pokhara</Text>

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
