import { Text, View, ScrollView} from "react-native";
import Constants from 'expo-constants'

import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from '../components/section'
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { RestaurantVerticalList } from '../components/list'


const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView 
      style={{ flex: 1 }} 
      className="bg-slate-200" 
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header/>

        <Banner/>

        <Search/>
      </View>

      
      <Section
        name="Eventos em Alta"
        label="Visualizar Todos (1000)"
        action={ () => console.log("CLICOU NO Eventos em Alta")}
        size="text-2xl"
      />
      <TrendingFoods/>

      <Section
        name="Eventos Hoje"
        label="Veja todos"
        action={ () => console.log("CLICOU NO Eventos Hoje")}
        size="text-xl"
      />

      <Restaurants/>

      <Section
        name="Eventos Proximos"
        label="Veja todos"
        action={ () => console.log("CLICOU NO Eventos Proximos")}
        size="text-xl"
      />

      <RestaurantVerticalList/>

    </ScrollView>
  );
}
