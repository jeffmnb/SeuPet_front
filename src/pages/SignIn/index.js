import React, { useState, useContext } from 'react';
import { Image, Text, View, KeyboardAvoidingView, ScrollView } from 'react-native';

import {
    Container,
    TxtQuestion,
    ButtonLogin,
    BtnTitle
} from './styles';

import Logo from '../../assets/logo.png';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { FormLogin } from '../../components/FormLogin';
import theme from '../../theme';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../hooks/Auth';
import { Platform } from 'expo-modules-core';

export const SignIn = () => {

    const Navigation = useNavigation();

    const { signIn } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSignIn = () => {
        signIn(email, senha);
    };

    return (
        <Container>
            <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'height' : 'padding'} enabled>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{ top: heightPercentageToDP('4'), width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Image resizeMode='contain' style={{ width: widthPercentageToDP('50'), height: heightPercentageToDP('45') }} source={Logo} />
                    </View>

                    <FormLogin label={'Email'} typeKey={'email-address'} onChangeText={text => setEmail(text)} />

                    <FormLogin label={'Senha'} pass={true} onChangeText={text => setSenha(text)} />

                    <TxtQuestion>Ainda não possui uma conta? {'\n'}<Text onPress={()=> Navigation.navigate('SignUp')} style={{ fontSize: RFValue(11.5), fontFamily: theme.fonts.TextBold, color: theme.colors.BlueGreen}}>Clique aqui</Text>, e crie agora!</TxtQuestion>

                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: heightPercentageToDP('3') }}>
                        <ButtonLogin onPress={handleSignIn}>
                            <BtnTitle>Entrar</BtnTitle>
                        </ButtonLogin>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </Container>
    );
}