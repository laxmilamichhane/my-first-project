import React from 'react';
import { View, Text, Image } from 'react-native';
import SmallButtons from '../../components/SmallButtons';
import styles from './styles';

const App = ({ route }) => {
  const item = route.params;
  const { image, name, intro, relation, boxcolor, about } = item;
  return (
    <View style={styles.screen}>
      <View style={styles.uppercontainer}>
        <View
          style={{
            marginTop: 50,
            flex: 1,
          }}>
          <Text style={styles.name}>{name || 'Laxmi Lamichhane'}</Text>
        </View>
      </View>
      <Image source={image || require('./ma.jpg')} style={styles.img} />

      <View style={{ flexDirection: 'row', marginLeft: 20 }}>
        <SmallButtons name={relation || 'Me'} bgcolor={boxcolor || 'white'} />
        <SmallButtons name="Contacts" bgcolor={boxcolor || 'white'} />
        <SmallButtons name="Gallery" bgcolor={boxcolor || 'white'} />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          marginTop: 30,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          padding: 10,
        }}>
        <Text style={{ fontSize: 20, color: 'gray', letterSpacing: 1 }}>
          {intro || 'Unknown'}
        </Text>
        <Text style={{ fontSize: 18 }}>{about || 'Unknown'}</Text>
      </View>
    </View>
  );
};
export default App;
