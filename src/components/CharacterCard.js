import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CharacterCard({image, name}) {
	const navigation = useNavigation();
  return (
    <TouchableOpacity 
			style={styles.container}
			onPress={() => navigation.navigate('Detail')}
	  >
			<Image 
				style={styles.image}
				source={image}
			/>
      <Text style={styles.font}>{name}</Text>
    </TouchableOpacity>
  );
};

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
});
