import { View, Pressable, Text, Image } from 'react-native';
import { CategoriesProps } from '..'
import { Ionicons } from '@expo/vector-icons'

export function CategoryItem({ item }: { item: CategoriesProps }) {
 return (
   <Pressable className='flex flex-row items-center justify-start gap-2'>
     <Image
      source={{ uri: item.image}}
      className='w-18 h-18 rounded-full'
     />

     <View className='flex gap-2'>
      <Text className='text-base text-black leading-4 font-bold' numberOfLines={2}>
        {item.name}
      </Text>


     </View>
   </Pressable>
  );
}