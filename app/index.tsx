import { Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 50, fontWeight: '700',}}>PetOn</Text>
      <Ionicons name="paw-outline" size={150} color="cyan" />
    </View>
  );
}
