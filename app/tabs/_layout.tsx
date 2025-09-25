import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: () => <FontAwesome name="paw" size={24} color="black" />,
          title: 'Inicio',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Cachorro"
        options={{
          title: 'Cachorros',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="dog" size={24} color="black"/>,
        }}
      />
      <Tabs.Screen
        name="Gatos"
        options={{
          title: 'Gatos',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="cat" size={24} color="black"/>,
        }}
      />
      
      <Tabs.Screen
        name="Coelhos"
        options={{
          title: 'Coelhos',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="rabbit-variant" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}
