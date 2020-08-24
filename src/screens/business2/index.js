import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import { imageList } from '../business';

const App = ({ route }) => {
  const { name, image, size, type } = route.params;
  console.log(route);
  return (
    <View style={styles.screen}>
      <Image
        source={imageList[image].image || require('./taa.jpg')}
        style={styles.image}
      />
      <View style={{ padding: 12 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.name}>{name || 'Welcome'}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={styles.business}>Business size:</Text>
          <Text style={styles.type}>{size || 'Individual'}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={styles.business}>Business type:</Text>
          <Text style={styles.type}>{type || 'Personal'}</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.destop}>Three simple things:</Text>
          <Text style={styles.des}>
            a.Know your product better than anyone.
          </Text>
          <Text style={styles.des}>b.Know your customer.</Text>
          <Text style={styles.des}>c.Have a burning desire to succeed.</Text>
        </View>
      </View>
    </View>
  );
};
export default App;
