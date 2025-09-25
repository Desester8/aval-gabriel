// Importações
import Botao from '@/components/Botao'
import styles from '@/constants/styles'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Link, useRouter } from 'expo-router'
import { Text, View } from 'react-native'

// função principal da tela
export default function Consulta() {
const router = useRouter()
    return (
      // buscar o estilo centralizado do arquivo styles.ts
        <View style={[styles.centralizado, { gap: 10 }]}>
            <Text style={{ fontSize: 20, fontWeight: '700' }}>Agora volte a tela inicial para fazer a consulta</Text>
             <FontAwesome name="paw" size={100} color="black" />
            <Botao onPress={()=>{
                router.push('/Stack')
            }}>
                <Link href="/Stack" style={{ color: '#fff' }}>
                    Ir para Proxima Tela
                </Link>
            </Botao>
            </View>
    )
}