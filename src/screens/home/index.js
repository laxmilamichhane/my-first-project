import React from 'react';
import { View, FlatList } from 'react-native';

import HomeScreen from '../../components/HomeScreen';

import styles from './styles';

const buttonList = [
  {
    name: 'Meetings',
    image: [require('./discussion.png')],
    color: '#ffb7ea',
    screenName: 'Discuss',
  },
  {
    name: 'Course',
    image: [require('./patent.png')],
    color: '#fc7b5a',
    screenName: 'Course',
  },

  {
    name: 'Medical',
    image: [require('./hospital.png')],
    color: '#9dd5dd',
    screenName: 'Task',
  },
  {
    name: 'Account',
    image: [require('./acc.png')],
    color: '#6ff2b3',
    screenName: 'Creativity',
  },
  {
    name: 'Design',
    image: [require('./paint.png')],
    color: '#e6f268',
    screenName: 'Design',
  },
  {
    name: 'Get Advice',
    image: [require('./explanation.png')],
    color: '#c4c0bc',
    screenName: 'Advisor',
  },
];

const App = ({ navigation }) => (
  <View style={styles.conatiner}>
    <FlatList
      keyExtractor={(item) => item.name}
      numColumns={2}
      data={buttonList}
      renderItem={({ index, item }) => {
        return (
          <HomeScreen
            name={item.name}
            image={item.image}
            color={item.color}
            onPress={() => navigation.navigate(item.screenName)}
          />
        );
      }}
    />
  </View>
);
export default App;
