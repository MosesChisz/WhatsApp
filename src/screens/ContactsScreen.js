import { FlatList } from 'react-native';
import chats from '../../assets/data/chats.json';
import ContactListItem from '../components/ContactListItem copy';
import React from 'react'

const ContactsScreen = () => {
  return (
    <FlatList
    data={chats}
    renderItem={({ item }) => <ContactListItem user={item.user}/>}
    style={{ backgroundColor: 'white' }} //it tell flatlist how it should render flatList from our array 'data'
/>
  )
}

export default ContactsScreen;