import React from 'react';
import { View, Text, Image } from 'react-native';

import DiscussTwo from '../../components/DiscussTwo';
import DiscussTwos from '../../components/DiscussTwos';

import styles from './styles'

const App = () => (
  <View style={styles.container}>
    <Image source={require('./laxmi.jpg')} style={styles.image} />

    <View style={styles.flex}>
      <View style={styles.date}>
        <Text style={styles.text}>22 </Text>
        <Text style={styles.texttwo}>Jul</Text>
      </View>
      <View style={{ marginTop: 30, marginLeft: 20 }}>
        <Text style={styles.text1}>Product Planning</Text>
        <Text style={styles.text2}>HQ Product Design Team</Text>
      </View>
    </View>
    <View style={styles.lowercontainer}>
      <View style={{ flexDirection: 'row', paddingHorizontal: 12, justifyContent: 'space-between' }}>

        <DiscussTwo selected title="Details" />
        <DiscussTwo title="Task" />
        <DiscussTwo title="Notes" />
      </View>

      <View>
        <DiscussTwos
          image="https://images.cdn2.stockunlimited.net/preview1300/antiwise-clock-icon_1998648.jpg"
          title="10:00 AM - 11:30 AM" />

        <DiscussTwos
          image="https://cdn0.iconfinder.com/data/icons/facebook-ui-glyph/48/Sed-21-512.png"
          title="Cs 24/Product Design" />



        <View style={{ flexDirection: 'row', }}>
          <Image source={{ uri: 'https://cdn5.vectorstock.com/i/1000x1000/44/59/speech-bubble-message-icon-vector-20994459.jpg' }}
            style={styles.msg} />
          <View style={{ flexDirection: 'column', alignSelf: 'center', }}>
            <Text style={styles.message}>It is a long established fact that a reader will be</Text>
            <Text style={styles.message}>distracted by the readable content of a page </Text>
            <Text style={styles.message}>when looking at its layout. The point of using </Text>
            <Text style={styles.message}>Lorem ipsum is that it has a more or less </Text>
            <Text style={styles.message}>normal distribution of letters, as opposed to </Text>
            <Text style={styles.message}>using 'Content here,Content here', making it </Text>
            <Text style={styles.message}>look like readable English.</Text>
          </View>
        </View>

        <DiscussTwos
          small
          image="https://i.pinimg.com/474x/03/07/55/030755c921ad01c3b7987b03af2927fc.jpg"
          title="Laxmi, Sudha, Hari, Anju +6" />

      </View>

      <View style={{ flexDirection: 'row', marginStart: 72 }}>
        <Image source={require('./laxmi.jpg')} style={styles.lastimage} />
        <Image source={require('./sudha.jpg')} style={styles.lastimage} />
        <Image source={require('./hari.jpg')} style={styles.lastimage} />
        <Image source={require('./anju.jpg')} style={styles.lastimage} />
      </View>


    </View>
    <View style={{ marginLeft: 100, marginBottom: 12 }}>
      <Text style={{ fontSize: 24, color: '#ff6c11', fontWeight: 'bold' }}> Create Meeting </Text>
    </View>
  </View>


);
export default App;