import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';

import styles from './style';

const App = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.name}>
      <Text style={styles.syn}>𝐒𝐲𝐧𝐭𝐚𝐱</Text>
      <Image
        source={{
          uri:
            'https://storytale.io/wp-content/uploads/2020/03/draw-02-animal-care.png',
        }}
        style={styles.img}
      />
    </View>
    <Text style={styles.owner}>Owner's name: Laxmi Lamichhane</Text>
    <Text style={styles.syntu}>Syntax needs</Text>

    <View style={styles.lower}>
      <View style={styles.flex}>
        <Image
          source={{
            uri:
              'https://us.123rf.com/450wm/iconicbestiary/iconicbestiary1602/iconicbestiary160200031/53122609-stock-vector-dog-dry-food-bowl-bone-shaped-crisps-flat-style-vector-illustration-isolated-on-white-background-.jpg?ver=6',
          }}
          style={styles.imgs}
        />
        <View style={styles.load}>
          <Text style={styles.need}> His lunch</Text>
          <Image
            source={{
              uri:
                'https://i.pinimg.com/originals/8f/48/98/8f4898d9e6c77173fa1b5cd59c28c9b4.jpg',
            }}
            style={styles.imge}
          />
        </View>
      </View>
      <View style={styles.flex}>
        <Image
          source={{
            uri:
              'https://media.socastsrm.com/wordpress/wp-content/blogs.dir/2164/files/2019/12/istockphoto-866544246-612x612.jpg',
          }}
          style={styles.imgs}
        />
        <View style={styles.load}>
          <Text style={styles.need}> Vet appointment</Text>
          <Image
            source={{
              uri:
                'https://i.pinimg.com/originals/8f/48/98/8f4898d9e6c77173fa1b5cd59c28c9b4.jpg',
            }}
            style={styles.imge}
          />

        </View>
      </View>
    </View>
    <View style={styles.last}>
      <Text style={styles.opt}>Share</Text>
      <Text style={styles.opt}>Pick up</Text>
      <Text style={styles.opt}>Continue</Text>
    </View>
  </SafeAreaView>
);
export default App;
