import { View, Text} from 'react-native';
import { useState, useEffect } from 'react'
import { CategoryItem } from './item'

export interface CategoriesProps{
  id: string;
  name: string;
  image: string;
}

export function CategoryVerticalList() {
  const [Categories, setCategories] = useState<CategoriesProps[]>([])

  useEffect(() => {
    async function getFoods(){
      const response = await fetch("http://192.168.0.12:3000/Categories")
      const data = await response.json()
      setCategories(data);
    }

    getFoods();
  }, [])


 return (
   <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
    {Categories.map( item => (
      <CategoryItem item={item} key={item.id}/>
    ))}
   </View>
  );
}