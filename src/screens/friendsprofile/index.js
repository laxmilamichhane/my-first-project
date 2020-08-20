import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';

import SmallButtons from '../../components/SmallButtons';
import SettingBoxes from '../../components/SettingBoxes';
import styles from './styles';

const App = ({ route }) => {
  const item = route.params;
  const { image, name, intro, relation, boxcolor, buttoncolor, place } = item;
  const aboutList = [
    {
      image: require('./map.png'),
      title: 'From',
      place: place,
    },
    {
      image: require('./home.png'),
      title: 'Lives in',
      place: 'Fulbari',
    },
    {
      image: require('./puz.png'),
      title: 'Interests',
      icon: [require('./forward.png')],
    },
    {
      image: require('./about.png'),
      title: 'About',
      place: 'See More',
    },
  ];
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
          marginTop: 38,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          padding: 20,
        }}>
        <TouchableOpacity activeOpacity={0.85}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <View style={styles.emailbox}>
              <Text style={styles.email}>📧 Mail</Text>
            </View>

            <View style={styles.emailbox}>
              <Text style={styles.email}>📞 Call</Text>
            </View>
          </View>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 18,
            color: 'gray',
            letterSpacing: 1,
            margin: 16,
          }}>
          {intro || 'Unknown'}
        </Text>

        <FlatList
          keyExtractor={(item, index) => item.title + index.toString()}
          data={aboutList}
          renderItem={({ item, index }) => {
            return (
              <SettingBoxes
                title={item.title}
                image={item.image}
                place={item.place}
              />
            );
          }}
        />
        <Button title="INVITE" color={buttoncolor || 'pink'} />
      </View>
    </View>
  );
};
export default App;
