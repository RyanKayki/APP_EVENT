import React, { useState, useEffect } from 'react';
import { View, TextInput, Image, FlatList, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

// Define the Event type
interface Event {
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;
  categoriesId: string;
  location: string;
  date: string;
  duration: string;
  description: string;
}

export function Search() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Fetch events from the API
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://192.168.2.113:3000/events');
        const data = await response.json();
        setEvents(data.events);
        setFilteredEvents(data.events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleSearch = (text: string) => {
    setSearchTerm(text);
    const results = events.filter(event => 
      event.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredEvents(results);
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View className='w-full flex-row border border-slate-500 h-14 rounded-full items-center gap-2 px-4 bg-transparent'>
        <Image 
          source={{ uri: 'https://i.imgur.com/qjKtEWl.png' }} 
          style={{ width: 24, height: 24, borderRadius: 12 }}
        />

        <TextInput
          placeholder="Procure seu Evento..."
          className='w-80 h-full flex-1 bg-transparent'
          value={searchTerm}
          onChangeText={handleSearch}
        />

        <Feather name='search' size={24} color="#64748b"/>
      </View>

      <FlatList
        data={filteredEvents}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}
