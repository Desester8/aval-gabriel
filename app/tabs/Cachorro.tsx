import { View, Text, StyleSheet } from 'react-native';
import styles from '@/constants/styles';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
export default function Tab() {
  return (
    <View style={styles.centralizado}>
      <FontAwesome5 name="dog" size={100} color="purple" />
      <Text style={{ fontSize: 20, fontWeight: '700' }}> Cuidamos do seu Cachorro !!!</Text>
    </View>
  );
};
