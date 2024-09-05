import React, { useState } from 'react';
import { View, Pressable, Text, Alert } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';
import * as Notifications from 'expo-notifications';

const GEOCODING_API_URL = 'https://nominatim.openstreetmap.org/reverse?format=json&addressdetails=1';

export function Header() {
  const [locationPermission, setLocationPermission] = useState<boolean | null>(null);
  const [locationDetails, setLocationDetails] = useState<{ city: string } | null>(null);
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(false);

  const askForLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      setLocationPermission(true);
      try {
        const location = await Location.getCurrentPositionAsync();
        const { latitude, longitude } = location.coords;

        // Solicita a geocodificação reversa
        const response = await fetch(`${GEOCODING_API_URL}&lat=${latitude}&lon=${longitude}`);
        const data = await response.json();

        // Extrai a cidade
        const city = data.address.city || data.address.town || data.address.village || 'Desconhecido';

        setLocationDetails({ city });
      } catch (error) {
        console.error(error);
        Alert.alert('Erro', 'Não foi possível obter a localização.');
      }
    } else {
      setLocationPermission(false);
      Alert.alert(
        "Permissão Negada",
        "Você precisa permitir o acesso à localização para usar esta funcionalidade."
      );
    }
  };

  const toggleNotificationPermission = async () => {
    if (notificationsEnabled) {
      // Se já estiver habilitado, desative as notificações (ou ignore, já que a API do Expo não tem método para desativar permissões)
      setNotificationsEnabled(false);
    } else {
      // Solicita permissão para notificações
      const { status } = await Notifications.requestPermissionsAsync();
      if (status === 'granted') {
        setNotificationsEnabled(true);
      } else {
        Alert.alert(
          "Permissão Negada",
          "Você precisa permitir o acesso às notificações para usar esta funcionalidade."
        );
      }
    }
  };

  return (
    <View className="w-full flex flex-row items-center justify-between">
      <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
        <Ionicons name="menu" size={20} color="#121212" />
      </Pressable>

      <View className="flex flex-col items-center justify-center">
        <Pressable onPress={askForLocationPermission} className="flex-row items-center justify-center">
          <Text className="text-center text-sm text-slate-800 ml-2">Localização</Text>
        </Pressable>

        <Text className="text-lg font-bold mt-1">
          <Feather name="map-pin" size={14} color="#FF0000" />
          {locationDetails ? locationDetails.city : 'Obtenha sua localização'}
        </Text>
      </View>

      <Pressable onPress={toggleNotificationPermission} className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
        <Feather
          name={notificationsEnabled ? "bell" : "bell-off"}
          size={20}
          color="#121212"
        />
      </Pressable>
    </View>
  );
}
