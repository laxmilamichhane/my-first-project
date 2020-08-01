import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

import DesignTask from '../../components/DesignTask';

import styles from './styles';
const App = () => (
  <ScrollView>
    <View style={styles.container}>
      <Text style={styles.first}>BESTSELLER</Text>
      <Text style={styles.title}>Design Thinking</Text>
      <View style={styles.contain}>
        <Image style={styles.image} source={require('./image.jpg')} />
        <Text style={styles.num}>$50 </Text>
        <Text style={styles.number}>$70</Text>
      </View>

      <Text style={styles.course}>Course content</Text>

      <DesignTask
        title="35mins"
        top="Welcome to the course"
        image="https://static.vecteezy.com/system/resources/previews/000/630/395/non_2x/play-button-icon-design-illustration-vector.jpg"
      />
      <DesignTask
        title="19:35mins"
        image="https://static.vecteezy.com/system/resources/previews/000/630/395/non_2x/play-button-icon-design-illustration-vector.jpg"
        top="Design Thinking Introduction"
      />

      <DesignTask
        title="1:35mins"
        image="https://static.vecteezy.com/system/resources/previews/000/630/395/non_2x/play-button-icon-design-illustration-vector.jpg"
        top="Design Thinking Process"
      />

      <DesignTask
        title="1:30mins"
        image="https://static.vecteezy.com/system/resources/previews/000/630/395/non_2x/play-button-icon-design-illustration-vector.jpg"
        top="Costumer Perspective"
      />
      <View style={{ flexDirection: 'row-reverse' }}>
        <Text style={styles.last}> Buy Now</Text>

        <Image style={styles.image1} source={require('./cart.png')} />
      </View>
    </View>
  </ScrollView>
);

export default App;
