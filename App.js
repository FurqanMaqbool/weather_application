import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';
import { useState } from 'react';

export default function App() {
  const [city, setCity] = useState('okara');
  const [enteredText, setEnteredText ] = useState('');
  
  function changedetected(enteredtext){
    setEnteredText(enteredtext);
  }

  function onpress(){
    setCity(enteredText);
  }
  

  const backgroundImageSource = require('./assets/cloud-day.jpg');
  
  return (
    <ImageBackground source={backgroundImageSource}>
      <View style={styles.container}>
        <SearchBar changeDetected={changedetected} onpress={onpress} />
        <Weather cityName={city} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
