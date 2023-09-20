import React, { useState } from 'react'
import { FlatList, View, ItemSeparatorComponent } from 'react-native';
import { ListItem, ListItemSeparator, ListItemDeleteAction } from '../components/lists';
import Screen from '../components/Screen';

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg')
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg')
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    const newMessages = messages.filter(m => m.id !== message.id);
    setMessages(newMessages);
  };
  
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={()=> console.log("Message Selected: ", item)}
            renderRightActions={() =>
              <ListItemDeleteAction
                onPress={() => handleDelete(item)}/>
            }
            showChevrons
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(initialMessages);
        }}
      />
    </Screen>
  )
};
