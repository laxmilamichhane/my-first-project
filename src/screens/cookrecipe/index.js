import React from 'react';
import { View, Image, Text, FlatList } from 'react-native';

import styles from './styles';

import NameTypes from '../../components/NameTypes';
import RecipeBox from '../../components/RecipeBox';
import RecipeNew from '../../components/RecipeNew';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const newList = [
  {
    image: require('./kathi.jpg'),
    name: 'Kathi Roll',
    des: '5 Serve 🕐 56min',
  },
  {
    image: require('./pizza.jpg'),
    name: 'Pizza',
    des: '1 Serve 🕐 35min',
  },
  {
    image: require('./donut.jpg'),
    name: 'Donuts',
    des: '3 Serve 🕐 20min',
  },
];
const recipeList = [
  {
    image: require('./food.jpg'),
    name: 'Granola With Fruits',
    des: 'Breakfast Lightfood',
    bgcolor: 'pink',
    images: require('./plus.png'),
    description: 'Learning how to make easy Granola can be fun!',
    time: '42 min',
    people: '2 people',
  },
  {
    image: require('./avo.jpg'),
    name: 'Caprese Avocado',
    des: 'Lightfood',
    bgcolor: '#5ed178',
    images: require('./plus.png'),
    description: 'Learning how to make easy Caprse Avocado can be fun!',
    time: '⏱ 35 min',
    people: '2 people',
  },
  {
    image: require('./pan.png'),
    name: 'Fluffy Pancakes',
    des: 'Snack Lighfood',
    bgcolor: '#ce8a31',
    images: require('./plus.png'),
    description: 'Learning how to make easy Fluffy Pancakes can be fun!',
    time: '⏱ 30 min',
    people: '2 people',
  },
  {
    image: require('./no.jpeg'),
    name: 'Noodles',
    des: 'Breakfast lightfood',
    bgcolor: '#f2d39c',
    images: require('./plus.png'),
    description: 'Learning how to make easy Noodles can be fun!',
    time: '⏱ 20 min',
    people: '2 people',
  },
];

const App = ({ navigation, route }) => {
  const { name } = route.params;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ backgroundColor: 'white', padding: 4 }}>
        <Image
          source={{
            uri:
              'https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&w=1000&q=80',
          }}
          style={styles.image}
        />
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => navigation.navigate('Setting')}>
          <Image source={require('./management.png')} style={styles.setting} />
        </TouchableOpacity>

        <View style={{ flexDirection: 'row' }}>
          <Image source={require('./laxmi.jpg')} style={styles.person} />
          <View
            style={{
              marginTop: 138,
              flex: 1,
              marginLeft: 6,
            }}>
            <Text style={styles.name}>{name || 'username'}</Text>
            <Text style={{ fontSize: 16 }}>1.74 Followers</Text>
          </View>

          <Image
            source={{
              uri:
                'https://cdn140.picsart.com/260662596010212.png?type=webp&to=min&r=1024',
            }}
            style={styles.follow}
          />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <NameTypes type="Recipes" color="black" selected />
          <NameTypes type="Galleries" color="black" />
          <NameTypes type="Story" color="black" />
        </View>

        <View style={styles.viewone}>
          <View style={styles.viewtwo} />
        </View>
        <View style={{ flexDirection: 'row', margin: 6 }}>
          <Text style={styles.recommended}>Recommended</Text>
          <Text style={styles.see}>SEE ALL</Text>
        </View>
        <View>
          <FlatList
            keyExtractor={(item, index) => item.title + index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={recipeList}
            renderItem={({ item, index }) => {
              return (
                <RecipeBox
                  image={item.image}
                  name={item.name}
                  des={item.des}
                  bgcolor={item.bgcolor}
                  images={item.images}
                  onPress={() => navigation.navigate('Pancakes', { item })}
                />
              );
            }}
          />
        </View>
        <View>
          <Text style={styles.new}>New Recipes</Text>

          <FlatList
            keyExtractor={(item, index) => item.title + index.toString()}
            data={newList}
            renderItem={({ item, index }) => {
              return (
                <RecipeNew image={item.image} name={item.name} des={item.des} />
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default App;
