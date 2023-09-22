import React, { useState } from 'react'
import { FlatList, View, ItemSeparatorComponent } from 'react-native';
import { ListItem, ListItemSeparator, ListItemDeleteAction } from '../components/lists';
import Screen from '../components/Screen';

const mustExplain = 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?';
const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const initialMessages = [
  {
    id: 1,
    title: loremIpsum,
    description: mustExplain,
    image: require('../assets/mosh.jpg')
  },
  {
    id: 2,
    title: loremIpsum,
    description: mustExplain,
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
