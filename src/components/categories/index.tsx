import { View, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { CategoryItem, CategoriesProps } from './horizontal';

export function Categories() {
  const [Categories, setCategories] = useState<CategoriesProps[]>([]);

  useEffect(() => {
    async function getevents() {
      const response = await fetch("http://192.168.2.113:3000/categories");
      const data = await response.json();
      setCategories(data);
    }

    getevents();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexDirection: 'row', gap: 10, paddingLeft: 13, paddingRight: 13 }}>
      {Categories.map(item => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </ScrollView>
  );
}
