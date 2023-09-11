import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native';
import Screen from '../components/Screen';

import ListItem from '../components/ListItem'
import Icon from '../components/Icon';
import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    }
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    }
  }
];

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.accountContainer}>
        <ListItem
          title="Mosh Hamedani"
          subTitle="programmingwithmosh@gmail.com"
          // IconComponent={<Icon name="head-outline" iconColor="white" />}
          image={require('../assets/mosh.jpg')}
        />
      </View>
      <View style={styles.menu}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => 
            <ListItem
              title={item.title}
              IconComponent={
                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
              }
            />
          }
        />  
      </View>
      <ListItem
        title="Log Out"
        IconComponent={
          <Icon name="logout" backgroundColor="#ffe66d" />
        }
      />
    </Screen>
  )
};

const styles = StyleSheet.create({
  accountContainer: {
    flexDirection: "row",
    marginBottom: 15,
    backgroundColor: colors.white,
  },
  menu: {
    flexDirection: "row",
    backgroundColor: colors.white,
    marginBottom: 15,
  },
  screen: {
    backgroundColor: colors.light,
    alignItems: "stretch",
  }
})
export default AccountScreen;
