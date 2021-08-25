import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CharacterCard({image, name}) {
	const navigation = useNavigation();
  return (
    <TouchableOpacity
			onPress={() => navigation.navigate('Detail')}
	  >
			<Image
				source={image}
			/>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};
/*
const styles = StyleSheet.create({
    container: {
      marginTop: 40,
    },
    font: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    image: {
      color: 'red',
    },
});*/
