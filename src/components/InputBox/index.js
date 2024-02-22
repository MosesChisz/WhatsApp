import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const InputBox = () => {

  const [newMessage, setMessage] = useState('');

  const onSend = () => {
    console.warn('Sending a new message:', newMessage);

    setMessage('');
  };

  return (
    <View style={styles.container}>
      <AntDesign name='plus' size={20} color='royalblue'/>

      <TextInput value={newMessage} onChangeText={setMessage} style={styles.input} placeholder='Type your message....'/>


      <MaterialIcons onPress={onSend} style={styles.send} name='send' size={16} color='white'/>      
      
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 50,
    paddingHorizontal: 10,
    borderColor: 'lightgray',
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 10,
  },
  send: {
    backgroundColor: 'royalblue',
    padding: 7,
    borderRadius: 15,
    overflow: 'hidden',
  },
})

export default InputBox;