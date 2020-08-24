import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';

import TitlesName from '../../components/TitlesName';
import InputForm from '../../components/InputForm';
import ChooseBox from '../../components/ChooseBox';
import PrivatePublic from '../../components/PrivatePublic';
import BusinessImage from '../../components/BusinessImage';
import LoginSignup from '../../components/LoginSignup';

export const imageList = [
  { image: require('./taa.jpg') },
  { image: require('./meee.jpg') },
  { image: require('./odgd.jpg') },
  { image: require('./team.jpg') },
  { image: require('./org.jpg') },
];

const Validate = (name, size, type) => {
  if (!name) {
    Alert.alert('Name missing', 'Name is required');
    return false;
  }
  if (!size) {
    Alert.alert('Size missing', 'Size is required');
    return false;
  }
  if (!type) {
    Alert.alert('Type missing', 'Type is required');
    return false;
  }

  return true;
};

const App = ({ navigation }) => {
  const [name, setName] = useState('');

  const [justPicked, setPicked] = useState();

  const [pickCircle, setCircle] = useState();
  const [justSelected, setSelected] = useState();

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>𝐑𝐞𝐠𝐢𝐬𝐭𝐞𝐫 𝐲𝐨𝐮𝐫 𝐛𝐮𝐬𝐢𝐧𝐞𝐬𝐬</Text>
      <TitlesName name="Name" />
      <InputForm
        placeholder="Enter Name"
        onChangeText={(userInput) => setName(userInput)}
      />
      <TitlesName name="Size" />
      <ChooseBox
        image={require('./user.png')}
        type="Individual"
        selected={justPicked === 'Individual'}
        onPress={() => setPicked('Individual')}
        showIcon
      />
      <ChooseBox
        image={require('./team.png')}
        type="Team"
        selected={justPicked === 'Team'}
        onPress={() => setPicked('Team')}
        showIcon
      />
      <ChooseBox
        image={require('./teamwork.png')}
        type="Organization"
        selected={justPicked === 'Organization'}
        onPress={() => setPicked('Organization')}
        showIcon
      />
      <TitlesName name="Type" />
      <View style={{ flexDirection: 'row' }}>
        <PrivatePublic
          work="Public"
          selected={pickCircle === 'Public'}
          onPress={() => setCircle('Public')}
          showIcon
        />
        <PrivatePublic
          work="Private"
          selected={pickCircle === 'Private'}
          onPress={() => setCircle('Private')}
          showIcon
        />
      </View>
      <TitlesName name="Select avatar" />
      <FlatList
        keyExtractor={(item, index) => index}
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
        onPress={() => {
          const result = Validate(name, justPicked, pickCircle);
          if (result === true) {
            navigation.navigate('Page2', {
              name,
              image: justSelected,
              size: justPicked,
              type: pickCircle,
            });
          }
        }}>
        <View style={{ marginTop: 1 }}>
          <LoginSignup name="PROCEED" bgcolor="black" textcolor="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default App;
