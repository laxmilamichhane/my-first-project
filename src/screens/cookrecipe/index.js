import React from 'react';
import { View, Image, Text, FlatList } from 'react-native';

import styles from './styles';

import NameTypes from '../../components/NameTypes';
import RecipeBox from '../../components/RecipeBox';
import RecipeNew from '../../components/RecipeNew';
import { ScrollView } from 'react-native-gesture-handler';

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
  },
  {
    image: require('./avo.jpg'),
    name: 'Caprese Avocado',
    des: 'Breakfast Lightfood',
    bgcolor: '#5ed178',
    images: require('./plus.png'),
  },
  {
    image: require('./pan.png'),
    name: 'Fluffy Pancakes',
    des: 'Snack Lighfood',
    bgcolor: '#ce8a31',
    images: require('./plus.png'),
  },
  {
    image: require('./no.jpeg'),
    name: 'Granola With Fruits',
    des: 'Breakfast lightfood',
    bgcolor: '#f2d39c',
    images: require('./plus.png'),
  },
];

const App = ({ navigation }) => (
  <ScrollView>
    <View style={{ backgroundColor: 'white', padding: 4 }}>
      <Image
        source={{
          uri:
            'https://static8.depositphotos.com/1031551/816/i/450/depositphotos_8166666-stock-photo-old-cookbook.jpg',
        }}
        style={styles.image}
      />
      <View style={{ flexDirection: 'row' }}>
        <Image source={require('./laxmi.jpg')} style={styles.person} />
        <View style={{ marginTop: 210, margin: 10 }}>
          <Text style={styles.name}>Laxmi</Text>
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
      <View style={{ flexDirection: 'row' }}>
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
                onPress={() => navigation.navigate('Pancakes')}
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
export default App;
