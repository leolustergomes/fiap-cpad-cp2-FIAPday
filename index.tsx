import react from 'react';

import {
    Text,
    View,
    Image,
    TextInput,
    Touchable,
    TouchableOpacity,
    Alert,
} from 'react-native';

import style from './style';
import logo from '../../assets/logo_fiapday.png';

export default function Login() {
    const [rm, setRm] = react.useState('');
    const [senha, setSenha] = react.useState('');

    function getlogin() {
        try {

            if (!rm || !senha) {
                return Alert.alert('Preencha os campos para entrar')
            }

            Alert.alert('Login realizado com sucesso')

        } catch (error) {
            console.log('Erro ao realizar login', error)
        }

    }


    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={logo}
                    style={style.logo}
                    resizeMode='contain'
                />
                <Text style={style.text}>Bem Vindo de Volta!</Text>
            </View>
            <View style={style.boxMid}>
                <Text style={style.titleInput}>SEU RM:</Text>
                <View style={style.BoxInput}>
                    <TextInput
                        style={style.input}
                        value={rm}
                        onChangeText={setRm}
                    />
                </View>

                <Text style={style.titleInput}>SUA SENHA:</Text>
                <View style={style.BoxInput}>
                    <TextInput
                        style={style.input}
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry
                    />
                </View>
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.Button} onPress={() => getlogin()}>
                    <Text style={style.textButton}>ENTRAR</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}