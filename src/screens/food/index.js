import React from 'react';
import { View, Image, Text, FlatList } from 'react-native';

import styles from './styles';


import UpcomingTask from '../../components/UpcomingTask';

import FoodFile from '../../components/FoodFile';




const taskList = [{
  title: 'A / B Testing for',
  dis: 'Dashboard Design',
  tasknumber: '10 Tasks',
  color: '#2b3a6b',
  image: [require('./content.png')]
},
{
  title: 'Making a payment',
  dis: 'Design work',
  tasknumber: '05 Tasks',
  color: '#ff5959',
  image: [require('./pay.png')]
},
{
  title: 'Task Management',
  dis: 'Pending tasks',
  tasknumber: '20 Tasks',
  color: '#f9c116',
  image: [require('./monitor.png')]
},
{
  title: 'Business Meetings',
  dis: 'Codse',
  tasknumber: '03 Tasks',
  color: '#988ff7',
  image: [require('./meeting.png')]
},
];
const clientList = [{
  top: 'Upload Client File Slack',
  time: '7:00 AM - 8:00 AM',
  image: [require('./binary.png')],
  color: '#cde2d9',
},
{
  top: 'Git Push',
  time: '11:00 AM- 12:00 PM',
  image: [require('./finger.png')],
  color: '#cde2d9',
},
{
  top: 'File Submit',
  time: '1:00 PM -2:00 PM',
  color: '#cde2d9',
  image: [require('./folder.png')]
},
];


const App = () => (
  <View style={styles.screen}>
    <View style={styles.uppercontainer}>
      <Image source={require('./menu.png')} style={styles.icon} />
      <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between' }}>
        <Image source={require('./logo.png')} style={styles.codse} />
        <Image source={require('./laxmi.jpg')} style={styles.image} />
      </View>
    </View>
    <View>
      <Text style={styles.name}>Hi Laxmi</Text>
      <Text style={styles.des}>Here are your tasks</Text>
    </View>

    <View style={{ height: 270 }}>
      <FlatList showsHorizontalScrollIndicator={false} horizontal data={taskList} renderItem={({ item, index }) => {
        return <UpcomingTask title={item.title}
          dis={item.dis}
          tasknumber={item.tasknumber}
          color={item.color}
          image={item.image} />
      }
      } />
    </View>

    <View style={styles.lowercontainer}>
      <Text style={styles.name}>Upcoming Tasks</Text>
    </View>
    <FlatList showsVerticalScrollIndicator={false} data={clientList} renderItem={({ item, index }) => {
      return <FoodFile top={item.top}
        time={item.time}
        image={item.image}
        color={item.color} />
    }} />
  </View>
);
export default App; 