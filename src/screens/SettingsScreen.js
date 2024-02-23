import { View, Button } from 'react-native';
import {Auth} from 'aws-amplify';
import React from 'react'


const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  }}>
      <Button onPress={() => Auth.signOut()} title='Sign out'/>
    </View>
  )
}

export default SettingsScreen;