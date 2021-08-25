import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Comic from '../components/Comic';
import apiParams from '../../config.js'
import axios from 'axios';

export default function Home() {
  const [search, setSearch] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;

  useEffect(() => {
    axios.get(`${baseURL}/v1/public/characters`, {
      params: {
        ts,
        apikey,
        hash
      }
    })
      .then(response => setData(response.data.data.results))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function searchCharacter() {
    if(search) {
      setLoading(true);
      axios.get(`${baseURL}/v1/public/characters`, {
        params: {
          ts,
          apikey,
          hash,
          nameStartsWith: search
        }
      })
        .then(response => setData(response.data.data.results))
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {
        isLoading 
          ? <ActivityIndicator size="large" color="#00ff00" /> 
          : <View>
              <FlatList
                contentContainerStyle={{alignItems: 'center'}}
                data={data}
                keyExtractor={({ id }) => id.toString()}
                horizontal
                renderItem={({ item }) => (
                  <Comic 
                    key={item.id}
                    name={item.title} 
                    image={`${item?.thumbnail?.path}.${item.thumbnail.extension}`}  
                  />
              )}
            />
            <Searchbar
              placeholder="Search for character..."
              onChangeText={value => setSearch(value)}
              value={search}
              onIconPress={searchCharacter}
              onSubmitEditing={searchCharacter}
            />
          </View>
      }
    </View>
  );
};