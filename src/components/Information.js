import React from 'react';
import { Text, View, Image } from 'react-native';

export default function Information({ image, name, description }) {
    return (
      <View>
        <Image
          source={{uri: image}}
        />
        <Text>{name}</Text>
        <Text>{description}</Text>
      </View>
    );
};
/*
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  title: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  description: {
    color: 'black',
    fontSize: 20,
  },
  image: {
    color: 'red',
  },
});*/