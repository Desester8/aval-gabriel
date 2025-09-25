import styles from '@/constants/styles';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Text, View } from 'react-native';
export default function Tab() {
  return (
    <View style={styles.centralizado}>
      <FontAwesome5 name="cat" size={100} color="darkgreen" />
      <Text style={{ fontSize: 20, fontWeight: '700' }}> Cuidamos do seus Gatos!!!</Text>
    </View>
  );
};
