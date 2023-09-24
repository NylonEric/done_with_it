import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import AppText from '../components/Text';
import { styles } from '../styles/styles';
import { ListItem } from '../components/lists';

export default function ListDetailScreen() {
  return (
    <View>
      <Image style={style.image} source={require('../assets/jacket.jpg')}></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for Sale!</AppText>
        <AppText style={styles.price}>$100</AppText>
          <View style={styles.userContainer}>
            <ListItem
              image={require('../assets/mosh.jpg')}
              title="Mosh Hamedani"
              subTitle="5 Listings"
            />
          </View>
      </View>
    </View>
  )
};

const style = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  }
});