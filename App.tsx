
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import PalmeirasOn from './assets/on.png';
import PalmeirasOff from './assets/off.png';
import { useState } from 'react';

export default function App() {
  const [isActive, setisActive] = useState(false);

  function handleVerde (){
    setisActive((oldValue:boolean) => {
      return !oldValue
    })

  }

  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      
      <Text style = {styles.text} >Avanti Palestra!</Text>
      <TouchableOpacity onPress={handleVerde}>
      <Image source={isActive ? PalmeirasOff : PalmeirasOn}></Image>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerOff: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerOn: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },

    text: {
    fontSize: 30,
    color: 'green'
  }
});



