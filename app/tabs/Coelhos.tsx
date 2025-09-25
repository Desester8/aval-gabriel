import { View, Text, StyleSheet } from 'react-native';
import styles from '@/constants/styles';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Tab() {
  return (
    <View style={styles.centralizado}>
      <MaterialCommunityIcons name="rabbit-variant-outline" size={150} color="darkblue" />
      <Text style={{ fontSize: 20, fontWeight: '700' }}> Cuidamos do seu Coelho !!!</Text>
    </View>
  );
};
