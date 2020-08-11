import React from 'react';
import { View, Text, Image, ImageBackground, ScrollView } from 'react-native';

import SmallButtons from '../../components/SmallButtons';
import styles from './styles';

const App = () => (
  <View style={styles.screen}>
    <ImageBackground
      source={{
        uri:
          'https://www.oetker.co.uk/Recipe/Recipes/oetker.co.uk/uk-en/pancakes/image-thumb__73355__RecipeDetailsLightBox/american-pancake-stack.jpg',
      }}
      style={styles.image}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.name}>Pancakes</Text>
          <Text
            style={{
              color: 'gray',
              fontSize: 16,
              marginTop: 6,
            }}>
            Snack Lightfood Cake
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={{
                uri:
                  'https://thumbs.dreamstime.com/z/five-star-rating-icon-evaluation-hotel-gold-stars-flat-yellow-isolated-background-vector-illustration-154721460.jpg',
              }}
              style={styles.star}
            />
            <Text style={{ fontSize: 20, marginLeft: 120 }}>
              ❤️️ 1.47 ✉️ 278
            </Text>
          </View>
          <Text style={styles.info}>INSIDER INFO</Text>
          <Text style={styles.way}>
            Learning how to make easy pancakes can be fun!
          </Text>
          <Text style={styles.way}>
            Spice up this easy cake favourite by adding pepper jack and salsa or
            lighten it up by substituting cooking spray and water for the flour
            and butter...
          </Text>
          <Text style={{ alignSelf: 'center' }}>🔽</Text>
          <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            <SmallButtons name="⏱ 30 min" bgcolor="pink" />
            <SmallButtons name="🥞 2 people" bgcolor="pink" />
            <SmallButtons name="⚡️ 450 cal" bgcolor="pink" />
          </View>
          <Text style={styles.info}>Ingredients</Text>
          <View style={{ flexDirection: 'row' }}>
            <SmallButtons name="1kg Flour" bgcolor="#d4d4d4" />
            <SmallButtons name="4 Eggs" bgcolor="#d4d4d4" />
            <SmallButtons name="Honey 2 tbs" bgcolor="#d4d4d4" />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <SmallButtons name="Species" bgcolor="#d4d4d4" />
            <SmallButtons name="Butter" bgcolor="#d4d4d4" />
            <SmallButtons name="Dry fruits" bgcolor="#d4d4d4" />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  </View>
);

export default App;
