import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Phoneform from '../../components/PhoneForm';

import styles from './styles';

const App = ({ navigation }) => (
  <View style={styles.screen}>
    <View
      style={{
        backgroundColor: 'white',
        borderBottomRightRadius: 100,
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Page')}>
          <Image source={require('./back.png')} style={styles.back} />
        </TouchableOpacity>
        <View style={[styles.topbox, { backgroundColor: '#FDCA40' }]}>
          <Text style={styles.todos}>𝐀𝐃𝐃 𝐓𝐎 𝐃𝐨'𝐬</Text>
        </View>
      </View>

      <Image source={require('./mage.png')} style={styles.image} />
    </View>

    <ImageBackground
      uri="https://www.engbladco.com/en/system/storage/serve/7815/Sahara_Image_Tile_Item_7152.jpg?itok=0BYZUrhw"
      style={styles.white}>
      <View style={styles.secondcontainer}>
        <View style={styles.container}>
          <Phoneform name="Title" />
          <Phoneform name="Description" optional="(optional)" />
          <Phoneform name="Deadline" optional="(optional)" />
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => navigation.navigate('Page')}>
            <View style={styles.button}>
              <Text style={styles.save}>SAVE</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  </View>
);
export default App;
