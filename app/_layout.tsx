import { Drawer } from 'expo-router/drawer';


export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Home',
          title: 'PetOn',
        }}
      />
      <Drawer.Screen
        name="tabs"
        options={{
          drawerLabel: 'Animais',
          title: '',
        }}
      />
      <Drawer.Screen
        name="Stack"
        options={{
          drawerLabel: 'Consulta',
          title: 'Constulte seu pet com a gente!!!',
        }}
      />
    </Drawer>
  );
}
