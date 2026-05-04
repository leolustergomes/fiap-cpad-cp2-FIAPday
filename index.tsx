import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import style from './style';
import logo from '../../assets/logo_fiapday.png';

export default function Login({ navigation }: any) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erros, setErros] = useState<any>({});

    function validar() {
        let e: any = {};

        if (!email.trim()) e.email = 'Email obrigatório';
        else if (!email.includes('@')) e.email = 'Email inválido';

        if (!senha) e.senha = 'Senha obrigatória';
        else if (senha.length < 6) e.senha = 'Mínimo 6 caracteres';

        setErros(e);
        return Object.keys(e).length === 0;
    }

    async function getlogin() {
        if (!validar()) return;

        const dados = await AsyncStorage.getItem('usuario');

        if (!dados) {
            alert('Usuário não cadastrado');
            return;
        }

        const usuario = JSON.parse(dados);

        if (email === usuario.email && senha === usuario.senha) {
            await AsyncStorage.setItem('logado', 'true');
            navigation.navigate('Calendario');
        } else {
            alert('Credenciais inválidas');
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={logo} style={style.logo} resizeMode='contain'/>
                <Text style={style.text}>Bem Vindo de Volta!</Text>
            </View>

            <View style={style.boxMid}>

                <Text style={style.titleInput}>E-MAIL:</Text>
                <View style={style.BoxInput}>
                    <TextInput style={style.input} value={email} onChangeText={setEmail}/>
                </View>
                {erros.email && <Text style={{color:'red'}}>{erros.email}</Text>}

                <Text style={style.titleInput}>SENHA:</Text>
                <View style={style.BoxInput}>
                    <TextInput style={style.input} secureTextEntry value={senha} onChangeText={setSenha}/>
                </View>
                {erros.senha && <Text style={{color:'red'}}>{erros.senha}</Text>}

            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.Button} onPress={getlogin}>
                    <Text style={style.textButton}>ENTRAR</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={{color:'white', marginTop:10}}>
                        Criar conta
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
