import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import ContactListItem from '../components/ContactListItem copy';
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from "../graphql/queries";

const ContactsScreen = () => {

   const [users, setUsers] = useState([]);

   useEffect(() => {
    API.graphql(graphqlOperation(listUsers)).then((result) => {
        console.log(result);
        setUsers(result.data?.listUsers?.items);
    })
   }, [])


  return (
    <FlatList
    data={users}
    renderItem={({ item }) => <ContactListItem user={item}/>}
    style={{ backgroundColor: 'white' }} //it tell flatlist how it should render flatList from our array 'data'
/>
  )
}

export default ContactsScreen;