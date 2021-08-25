import * as React from 'react';
import { View, Text, Image } from 'react-native';

export default function Comic({ name, image }) {
    return (
      <View>
              <Image
                  source={{uri: image}}
              />
              <Text>{name}</Text>
      </View>
    );
};