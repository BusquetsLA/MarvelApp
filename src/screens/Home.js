import * as React from 'react';
import { Text, View } from 'react-native';
import CharacterCard from '../components/CharacterCard';

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CharacterCard image={require('../../assets/favicon.png')} name='Iron Man' />
      <CharacterCard image={require('../../assets/favicon.png')} name='Captain America' />
    </View>
  );
};