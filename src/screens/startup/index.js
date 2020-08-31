import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  FlatList,
  Modal,
} from 'react-native';
import SettingBoxes from '../../components/SettingBoxes';
import StartupModal from '../../components/StartupModal';

import styles from './styles';

const todoList = [
  {
    title: 'Start making a presentation',
    icon: require('./clean.png'),
  },
  {
    title: 'Meeting with Harry',
    icon: require('./clean.png'),
  },
  {
    title: 'Design new Login screen',
    icon: require('./clean.png'),
  },
  {
    title: 'Read the book about UI',
    icon: require('./clean.png'),
  },
  {
    title: 'Shopping',
    icon: require('./clean.png'),
  },
  {
    title: 'Collaborate on a project',
    icon: require('./clean.png'),
  },
  {
    title: 'Post a shot on Dribble',
    icon: require('./clean.png'),
  },
  {
    title: 'Bring Cake from the store',
    icon: require('./clean.png'),
  },
  {
    title: 'Send Invitation message ',
    icon: require('./clean.png'),
  },
  {
    title: 'Chek up Mail',
    icon: require('./clean.png'),
  },
  {
    title: 'Client Feedback',
    icon: require('./clean.png'),
  },
  {
    title: 'Go for a walk ',
    icon: require('./clean.png'),
  },
];

const App = ({ navigation }) => {
  const [itemSelected, setItemSelected] = useState([]);
  return (
    <View style={styles.screen}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Page3')}>
          <Image source={require('./menu.png')} style={styles.menu} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.topbox, { backgroundColor: '#FDCA40' }]}>
            <Text style={styles.todos}>𝐓𝐎 𝐃𝐨'𝐬</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              'Completed Task',
              'You have not completed any of these task yet!',
            )
          }>
          <View style={styles.topbox}>
            <Text style={styles.todos}>𝐃𝐎𝐍𝐄</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.lowercontainer}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.yourtask}>𝐘𝐨𝐮𝐫 𝐭𝐚𝐬𝐤𝐬</Text>
          <Image
            source={require('./step.png')}
            style={[styles.menu, { marginTop: 4 }]}
          />
        </View>

        <FlatList
          keyExtractor={(item, index) => item.title + item.toString()}
          showsVerticalScrollIndicator={false}
          data={todoList}
          renderItem={({ item, index }) => {
            return (
              <SettingBoxes
                title={item.title}
                icon={item.icon}
                list
                selected={itemSelected.find((i) => i.title === item.title)}
                onPress={() => setItemSelected(itemSelected.concat(item))}
              />
            );
          }}
        />

        <TouchableOpacity
          activeOpacity={0.44}
          onPress={() => navigation.navigate('Page2')}>
          <View style={styles.button}>
            <Text
              style={{
                fontSize: 40,
                color: 'white',
                marginLeft: 13,
                bottom: 4,
              }}>
              +
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <Modal
        visible={itemSelected.length > 0}
        onRequestClose={() => setItemSelected([])}
        animationType="fade"
        transparent={true}>
        <StartupModal item={itemSelected} onClose={() => setItemSelected([])} />
      </Modal>
    </View>
  );
};
export default App;
