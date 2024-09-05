import { View, ScrollView, FlatList, ActivityIndicator, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { ReviewItem, ReviewProps } from './horizontal';

export function Reviews() {
  const [reviews, setReviews] = useState<ReviewProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getReviews() {
      try {
        const response = await fetch("http://192.168.2.113:3000/reviews");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        setError('Failed to fetch reviews');
      } finally {
        setLoading(false);
      }
    }

    getReviews();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem item={item} />}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      contentContainerStyle={{ paddingLeft: 22, paddingRight: 22 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
