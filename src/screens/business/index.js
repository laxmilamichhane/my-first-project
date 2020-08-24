import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';

import TitlesName from '../../components/TitlesName';
import InputForm from '../../components/InputForm';
import ChooseBox from '../../components/ChooseBox';
import PrivatePublic from '../../components/PrivatePublic';
import BusinessImage from '../../components/BusinessImage';
import LoginSignup from '../../components/LoginSignup';

const imageList = [
  { image: require('./taa.jpg') },
  { image: require('./meee.jpg') },
  { image: require('./odgd.jpg') },
  { image: require('./team.jpg') },
  { image: require('./org.jpg') },
];
const App = ({ navigation }) => {
  const [name, setName] = useState('');

  const [justPicked, setPicked] = useState();
  const [pickCircle, setCircle] = useState();
  const [justSelected, setSelected] = useState();

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>𝐑𝐞𝐠𝐢𝐬𝐭𝐞𝐫 𝐲𝐨𝐮𝐫 𝐛𝐮𝐬𝐢𝐧𝐞𝐬𝐬</Text>
      <TitlesName
        name="Name"
        onChangeText={(userInput) => setName(userInput)}
      />
      <InputForm placeholder="Enter Name" />
      <TitlesName name="Size" />
      <ChooseBox
        image={require('./user.png')}
        type="Individual"
        selected={justPicked === 'individual'}
        onPress={() => setPicked('individual')}
        showIcon
      />
      <ChooseBox
        image={require('./team.png')}
        type="Team"
        selected={justPicked === 'team'}
        onPress={() => setPicked('team')}
        showIcon
      />
      <ChooseBox
        image={require('./teamwork.png')}
        type="Organization"
        selected={justPicked === 'org'}
        onPress={() => setPicked('org')}
        showIcon
      />
      <TitlesName name="Type" />
      <View style={{ flexDirection: 'row' }}>
        <PrivatePublic
          type="Public"
          selected={pickCircle === 'public'}
          onPress={() => setCircle('public')}
          showIcon
        />
        <PrivatePublic
          type="Private"
          selected={pickCircle === 'private'}
          onPress={() => setCircle('private')}
          showIcon
        />
      </View>
      <TitlesName name="Select avatar" />
      <FlatList
        keyExtractor={(item, index) => item.title + item.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={imageList}
        renderItem={({ item, index }) => {
          return (
            <BusinessImage
              image={item.image}
              onPress={() => setSelected(index)}
              selected={justSelected === index}
            />
          );
        }}
      />
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() =>
          navigation.navigate('Page2', { name, image: justSelected })
        }>
        <View style={{ marginTop: 1 }}>
          <LoginSignup name="PROCEED" bgcolor="black" textcolor="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default App;
