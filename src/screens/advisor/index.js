import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';

import styles from './styles';
import AdvisorOne from '../../components/AdvisorOne';

listName = [
  {
    image: [require('./read.png')],
    top: 'Homeowners Insurance:',
    down: 'What it covers',
    time: '15 min read',
  },
  {
    image: [require('./second.png')],
    top: 'Avoid these mistakes',
    down: 'when selling your home',
    time: '25 min read',
  },
  {
    image: [require('./third.png')],
    top: 'Security rights in private ',
    down: 'movable property',
    time: '25 min read',
  },
  {
    image: [require('./fixx.png')],
    top: 'How to you sell your',
    down: 'home?',
    time: '10 min read',
  },
  {
    image: [require('./essayy.png')],
    top: 'Share with your friends',
    down: 'about your information',
    time: '10 min read',
  },
];

const App = ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: 'lightgray' }}>
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.buy}>BUY</Text>

        <Text style={styles.sell}>SELL</Text>
        <Image source={require('./search.png')} style={styles.image} />
      </View>
    </View>

    <FlatList
      keyExtractor={(item, index) => item.title + index.toString()}
      data={listName}
      renderItem={({ item, index }) => {
        return (
          <AdvisorOne
            top={item.top}
            image={item.image}
            time={item.time}
            down={item.down}
          />
        );
      }}
    />
  </View>
);
export default App;
