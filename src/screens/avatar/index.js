import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PhoneForm from '../../components/PhoneForm';
import ImageRow from '../../components/ImageRow';
import LoginSignup from '../../components/LoginSignup';
import ColorRow from '../../components/ColorRow';

import styles from './styles';

export const avatars = [
  require('./1.png'),
  require('./3.png'),
  require('./4.png'),
  require('./5.png'),
  require('./6.png'),
];

const App = ({ navigation }) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  const [currentPicked, setPicked] = useState();
  const [nowPick, setPick] = useState();

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>𝐂𝐡𝐨𝐨𝐬𝐞 𝐲𝐨𝐮𝐫 𝐀𝐯𝐚𝐭𝐚𝐫</Text>

      <View style={{ marginTop: 20 }}>
        <PhoneForm
          name="Name"
          onChangeText={(userInput) => setName(userInput)}
        />
        <PhoneForm
          name="Position"
          onChangeText={(userInput) => setPosition(userInput)}
        />
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.avatar}>Select Avatar</Text>
        <View style={{ flexDirection: 'row' }}>
          {avatars.map((image, index) => (
            <ImageRow
              key={image}
              image={image}
              selected={currentPicked === index}
              onPress={() => setPicked(index)}
            />
          ))}
        </View>
        <Text style={styles.avatar}>Select Color</Text>
        <View style={{ flexDirection: 'row' }}>
          <ColorRow
            bgcolor="red"
            bdrcolor="red"
            selected={nowPick === 'color1'}
            onPress={() => setPick('color1')}
          />

          <ColorRow
            bgcolor="green"
            bdrcolor="green"
            selected={nowPick === 'color2'}
            onPress={() => setPick('color2')}
          />

          <ColorRow
            bgcolor="yellow"
            bdrcolor="yellow"
            selected={nowPick === 'color3'}
            onPress={() => setPick('color3')}
          />
          <ColorRow
            bgcolor="blue"
            bdrcolor="blue"
            selected={nowPick === 'color4'}
            onPress={() => setPick('color4')}
          />

          <ColorRow
            bgcolor="purple"
            bdrcolor="purple"
            selected={nowPick === 'color5'}
            onPress={() => setPick('color5')}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() =>
            navigation.navigate('Page2', {
              name,
              position,
              image: currentPicked,
            })
          }>
          <View style={{ marginTop: 100 }}>
            <LoginSignup name="PROCEED" bgcolor="black" textcolor="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default App;
