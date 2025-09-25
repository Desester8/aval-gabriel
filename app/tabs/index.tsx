import styles from '@/constants/styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Text, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Tab() {
  return (
    <View style={styles.centralizadoTabs}> 
      <FontAwesome name="paw" size={100} color="blue" />
      <Text style={{ fontSize: 20, fontWeight: '700' }}>Veja Nossos animais Abaixo</Text>
      <FontAwesome5 name="hand-point-down" size={30} color="darkblue" />
    </View>
  );
}
;
