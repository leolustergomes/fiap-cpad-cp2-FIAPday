import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import style from '../login/style';

export default function Cadastro({ navigation }: any) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [erros, setErros] = useState<any>({});

    function validar() {
        let e: any = {};

        if (!nome.trim()) e.nome = 'Nome obrigatório';

        if (!email.trim()) e.email = 'Email obrigatório';
        else if (!email.includes('@')) e.email = 'Email inválido';

        if (!senha) e.senha = 'Senha obrigatória';
        else if (senha.length < 6) e.senha = 'Mínimo 6 caracteres';

        if (confirmarSenha !== senha)
            e.confirmarSenha = 'Senhas não conferem';

        setErros(e);
        return Object.keys(e).length === 0;
    }

    async function cadastrar() {
        if (!validar()) return;

        const usuario = { nome, email, senha };

        await AsyncStorage.setItem('usuario', JSON.stringify(usuario));

        alert('Cadastro realizado com sucesso!');
        navigation.navigate('Login');
    }

    return (
        <View style={style.container}>
            <View style={style.boxMid}>

                <Text style={style.titleInput}>NOME:</Text>
                <TextInput style={style.input} value={nome} onChangeText={setNome}/>
                {erros.nome && <Text style={{color:'red'}}>{erros.nome}</Text>}

                <Text style={style.titleInput}>EMAIL:</Text>
                <TextInput style={style.input} value={email} onChangeText={setEmail}/>
                {erros.email && <Text style={{color:'red'}}>{erros.email}</Text>}

                <Text style={style.titleInput}>SENHA:</Text>
                <TextInput style={style.input} secureTextEntry value={senha} onChangeText={setSenha}/>
                {erros.senha && <Text style={{color:'red'}}>{erros.senha}</Text>}

                <Text style={style.titleInput}>CONFIRMAR SENHA:</Text>
                <TextInput style={style.input} secureTextEntry value={confirmarSenha} onChangeText={setConfirmarSenha}/>
                {erros.confirmarSenha && <Text style={{color:'red'}}>{erros.confirmarSenha}</Text>}

            </View>

            <TouchableOpacity style={style.Button} onPress={cadastrar}>
                <Text style={style.textButton}>CADASTRAR</Text>
            </TouchableOpacity>
        </View>
    );
}