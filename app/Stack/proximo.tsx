import Botao from '@/components/Botao'
import styles from '@/constants/styles'
import useFormUsuario from '@/hooks/useFormUsuario'
import Cpf from '@/utils/cpf'
import { Link, router } from 'expo-router'
import { Text, TextInput, View } from 'react-native'

export default function TelaFormulario() {
    const { usuario, erros, setUsuario, salvar } = useFormUsuario()

    return (
        <View style={styles.centralizado}>
            <Text style={{ fontSize: 25, fontWeight: '700' }}>Primeiro Cadastre-se!!!</Text>
             <Text style={{ fontSize: 15, fontWeight: '700' }}>Dados</Text>
            <TextInput
                placeholder="Nome"
                value={usuario.nome ?? ''}
                style={[styles.input, erros.nome && styles.inputError]}
                onChangeText={(nome) => setUsuario({ ...usuario, nome })}
            />
            {erros.nome && <Text style={{ color: 'red' }}>{erros.nome}</Text>}

            <TextInput
                placeholder="Cpf"
                value={usuario.cpf ?? ''}
                style={styles.input}
                keyboardType="phone-pad"
                onChangeText={(cpf) => setUsuario({ ...usuario, cpf: Cpf.formatar(cpf) })}
            />
            <Botao onPress={()=>{
                router.push('/Stack/Consulta')
            }}>
                <Link href="/Stack/Consulta" style={{ color: '#fff' }}>
                    Proxima Tela
                </Link>
            </Botao>
        </View>
    )
}