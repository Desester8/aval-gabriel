// Importações
import Botao from '@/components/Botao'
import styles from '@/constants/styles'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Link, useRouter } from 'expo-router'
import { Text, View } from 'react-native'

// função principal da tela
export default function Index() {
const router = useRouter()
    return (
      // buscar o estilo centralizado do arquivo styles.ts
        <View style={[styles.centralizado, { gap: 10 }]}>
            <Text style={{ fontSize: 20, fontWeight: '700' }}>Siga esses passo a passo para a consulta de seu Pet!!</Text>
             <FontAwesome name="paw" size={100} color="blue" />
            <Botao onPress={()=>{
                router.push('/Stack/proximo')
            }}>
                <Link href="/Stack/proximo" style={{ color: '#fff' }}>
                    Ir para Proxima Tela
                </Link>
            </Botao>
            </View>
    )
}