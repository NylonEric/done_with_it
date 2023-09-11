import { View, Text } from 'react-native'
import React from 'react'
import Screen from '../components/Screen';
import ListItem from '../components/ListItem'
import Icon from '../components/Icon';

export default function MyAccount() {
  return (
    <Screen>
      <ListItem
      title="My Title"
      subTitle="My Subtitle"
      ImageComponent={<Icon name="email" iconColor="white" />}
      />
    </Screen>
  )
};
