import { useState, useEffect } from 'react'
import { FlatList } from 'react-native';
import { CardHorizontalevent } from './event'


export interface eventProps{
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;
}

export function Trendingevents() {
  const [events, setevents] = useState<eventProps[]>([])

  useEffect(() => {
    async function getevents(){
      const response = await fetch("http://192.168.2.113:3000/events")
      const data = await response.json()
      setevents(data);
    }

    getevents();
  }, [])

 return (
   <FlatList
      data={events}
      renderItem={ ({ item }) => <CardHorizontalevent event={item} /> }
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16}}
      showsHorizontalScrollIndicator={false}
   />
  );
}