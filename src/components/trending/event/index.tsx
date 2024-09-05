import { View, Pressable, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import { eventProps } from '..'

export function CardHorizontalevent({ event }: { event: eventProps }) {
 return (
   <Pressable className='flex flex-col rounded-xl relative'>
    <Image
      source={{ uri: event.image }}
      className="w-44 h-36 rounded-xl"
    />
    
    <View className='flex flex-row bg-neutral-900/90 gap-1 rounded-full absolute top-2 right-3 px-2 py-1 items-center justify-center'>
      <Ionicons name="star" size={14} color="#ca8a04"/>
      <Text className='text-white text-sm'>{event.rating}</Text>
    </View>

    <Text className='text-green-700 font-medium text-lg'>R$ {event.price}</Text>
    <Text className='text-black mt-1'>{event.name}</Text>
    <Text className='text-neutral-600 text-sm'>{event.time} - R$ {event.delivery}</Text>
   </Pressable>
  );
}