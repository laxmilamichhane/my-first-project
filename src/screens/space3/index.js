import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import SmegButtons from '../../components/SmegButtons';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const dataList = [
  {
    title: 'Assign',
    name: 'Sudha Shrestha',
    img: require('./sudha.jpg'),
  },
  {
    title: 'Due Date',
    date: 'Thu,Aug 04',
  },
];
const App = ({ navigation }) => (
  <View style={styles.screen}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginBottom: 10,
      }}>
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={() => navigation.navigate('Page2')}>
        <Image source={require('./sign.png')} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.dots}>...</Text>
    </View>
    <View style={styles.lowercontainer}>
      <Text style={styles.text}>MARKETTING | IN PROGRESS</Text>
      <View style={{ marginVertical: 10 }}>
        <Text style={styles.title}>Redesign content</Text>
        <Text style={styles.title}>for SMEG website</Text>
      </View>
      <Text style={styles.des}>In this task, you need to perform a super</Text>
      <Text style={styles.des}>drooper, it is important to have a serious</Text>
      <Text style={styles.des}>
        stuff as a first version so that everyone would like it.👍
      </Text>

      <View style={styles.box}>
        <Text
          style={{
            fontSize: 20,
            margin: 4,
          }}>
          Label
        </Text>
        <View style={styles.smallbox}>
          <Text style={styles.ui}>UI Interfaces</Text>
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.title + index.toString()}
        data={dataList}
        renderItem={({ item, index }) => {
          return (
            <SmegButtons
              type={item.type}
              name={item.name}
              img={item.img}
              title={item.title}
              date={item.date}
            />
          );
        }}
      />
      <Text style={styles.text}>ATTACHMENTS</Text>
      <View style={{ flexDirection: 'row' }}>
        <Image source={require('./blender.png')} style={styles.lastimage} />
        <Image source={require('./mug.png')} style={styles.lastimage} />
        <Image source={require('./kitchen.png')} style={styles.lastimage} />
      </View>
    </View>
  </View>
);
export default App;
