import React from 'react';
import { View, Text, FlatList } from 'react-native';
import SettingBoxes from '../../components/SettingBoxes';

import styles from './styles';

const businessList = [
  {
    image: require('./bell.png'),
    title: 'App feedback',
  },
  {
    image: require('./contract.png'),
    title: 'Agreement',
  },
  {
    image: require('./ni.png'),
    title: 'Releases from confideniality',
  },
  {
    image: require('./pass.png'),
    title: 'Passwword',
  },
  {
    image: require('./dial.png'),
    title: 'Pin',
  },
  {
    image: require('./logout.png'),
    title: 'Log out',
  },
];
const feedbackList = [
  {
    image: require('./review.png'),
    title: 'App feedback',
  },
  {
    image: require('./bug.png'),
    title: 'Bug report',
  },
];
const legalList = [
  {
    image: require('./login.png'),
    title: 'Privacy',
  },
  {
    image: require('./print.png'),
    title: 'Imprint',
  },
];
const App = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>GENERAL</Text>

    <FlatList
      keyExtractor={(item, index) => item.title + index.toString()}
      showsVerticalScrollIndicator={false}
      data={businessList}
      renderItem={({ item, index }) => {
        return <SettingBoxes image={item.image} title={item.title} />;
      }}
    />

    <Text style={styles.text}>FEEDBACK</Text>
    <FlatList
      keyExtractor={(item, index) => item.title + index.toString()}
      showsVerticalScrollIndicator={false}
      data={feedbackList}
      renderItem={({ item, index }) => {
        return <SettingBoxes image={item.image} title={item.title} />;
      }}
    />

    <Text style={styles.text}>Legal</Text>
    <FlatList
      keyExtractor={(item, index) => item.title + index.toString()}
      showsVerticalScrollIndicator={false}
      data={legalList}
      renderItem={({ item, index }) => {
        return <SettingBoxes image={item.image} title={item.title} />;
      }}
    />
  </View>
);
export default App;
