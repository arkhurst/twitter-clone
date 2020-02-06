import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {Text,View,} from 'react-native';

import { MonoText } from '../components/StyledText';

const HomeScreen = () => {
  return(
    <View style={{backgroundColor: '#e57ac2', flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text style={{fontSize: 25, color: '#fff'}}>Hello from world</Text>
    </View>
  )
}

export default HomeScreen;