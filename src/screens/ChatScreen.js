import { FlatList } from 'react-native';
import chats from '../../assets/data/chats.json';
import ChatListItem from '../components/ChatListItem';


const ChatScreen = () => {
    return (
        <FlatList
            data={chats}
            renderItem={({ item }) => <ChatListItem chat={item}/>}
            style={{ backgroundColor: 'red' }} //it tell flatlist how it should render flatList from our array 'data'
        />
    );
};

export default ChatScreen;