import { Text, View, ScrollView } from "react-native";
import Constants from 'expo-constants';

import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from '../components/section';
import { Trendingevents } from "../components/trending";
import { Categories } from "../components/categories";
import { CategoryVerticalList } from '../components/list';
import { Reviews } from '../components/reviews'; 

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView 
      style={{ flex: 1 }} 
      className="bg-slate-200" 
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8, marginBottom: 12 }}>
        <Header/>
        <Banner/>
        <Search/>
      </View>

      <Categories/>

      <Section
        name="Eventos em Alta"
        label="Visualizar Todos (1000)"
        action={ () => console.log("CLICOU NO Eventos em Alta")}
        size="text-2xl"
      />
      <Trendingevents/>

      <Section
        name="Eventos Hoje"
        label="Veja todos"
        action={ () => console.log("CLICOU NO Eventos Hoje")}
        size="text-xl"
      />
      <Trendingevents/>

      <Section
        name="Eventos Proximos"
        label="Veja todos"
        action={ () => console.log("CLICOU NO Eventos Proximos")}
        size="text-xl"
      />
      <Trendingevents/>

      <CategoryVerticalList/>

      <Section
        name="Comentários Recentes"
        label="Veja todos"
        action={ () => console.log("CLICOU NO Comentários Recentes")}
        size="text-xl"
      />
      <Reviews/>
    </ScrollView>
  );
}
