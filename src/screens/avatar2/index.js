import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';
import { avatars, avatarcolor } from '../avatar';

const App = ({ route }) => {
  const { name, position, image, colorIndex } = route.params;
  console.log(route);
  return (
    <View style={styles.screen}>
      <View
        style={[
          styles.uppercontainer,
          { backgroundColor: avatarcolor[colorIndex] },
        ]}>
        <Image
          source={avatars[image] || require('./laxmi.jpg')}
          style={styles.image}
        />
      </View>
      <Text style={styles.name}>{name || 'hya'}</Text>
      <Text style={styles.name2}>{position || 'last'}</Text>
    </View>
  );
};
export default App;
