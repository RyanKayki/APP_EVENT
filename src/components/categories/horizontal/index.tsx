import { Pressable, Image } from 'react-native';

export interface CategoriesProps {
  id: string;
  name: string;
  image: string;
}

export function CategoryItem({ item }: { item: CategoriesProps }) {
 return (
   <Pressable 
    className='flex flex-col items-center justify-center'
    onPress={() => console.log("CLICOU NO Category " + item.name)}
    >
    <Image
      source={{ uri: item.image}}
      className='w-20 h-20 rounded-full'
    />
   </Pressable>
  );
}