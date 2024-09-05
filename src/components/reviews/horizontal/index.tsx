import { ScrollView, View, Pressable, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Certifique-se de ter instalado @expo/vector-icons

export interface ReviewProps {
  id: string;
  user: string;
  rating: number;
  comment: string;
  restaurantId: string;
  eventName: string;
}

function renderStars(rating: number) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FontAwesome
        key={i}
        name={i <= rating ? 'star' : 'star-o'}
        size={16}
        color={i <= rating ? '#CD1B1B' : '#CD1B1B'}
      />
    );
  }
  return stars;
}

export function ReviewItem({ item }: { item: ReviewProps }) {
  return (
    <Pressable 
      className='flex flex-col items-start justify-center p-3 bg-gray-300 rounded-lg mr-3 w-80 mb-4'
      onPress={() => console.log("CLICOU NO COMENTÁRIO DE " + item.user)}
    >
      <View className='flex flex-row items-center mb-2'>
        <Text className='text-lg font-semi-bold'>{item.user}</Text>
        <View className='flex flex-row ml-2'>
          {renderStars(item.rating)}
        </View>
      </View>
      
      <Text className='text-lg font-bold mb-1'>{item.eventName}</Text>
      
      <Text className='text-lg text-gray-700'>{item.comment}</Text>
    </Pressable>
  );
}

export function ReviewList({ reviews }: { reviews: ReviewProps[] }) {
  return (
    <ScrollView contentContainerStyle={{ padding: 10 }}>
      {reviews.map(review => (
        <ReviewItem key={review.id} item={review} />
      ))}
    </ScrollView>
  );
}
