import React, { useContext, useState } from 'react';
import { Image, View, Text, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';

import {
    Container,
    TxtQuestion,
    ButtonLogin,
    BtnTitle,
    FormCity,
    Icon,
    InputCity,
    BtnSelectimage,
    TxtChoosePhoto
} from './styles';

import Logo from '../../assets/logo.png';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { FormLogin } from '../../components/FormLogin';
import theme from '../../theme';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import RNPickerSelect from 'react-native-picker-select';
import { AuthContext } from '../../hooks/Auth';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';


export const SignUp = () => {

    const Navigation = useNavigation();

    const { signUp } = useContext(AuthContext);

    const [next, setNext] = useState(false);
    const [image, setImage] = useState(null);
    const [imageUser, setImageUser] = useState(null);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [fone, setFone] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConf, setSenhaConf] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');


    const handleContinue = () => {
        setNext(oldData => !oldData);
    };

    const handleSendData = async () => {
        const data = {
            nome: nome,
            email: email,
            senha: senha,
            telefone: fone,
            cidade: cidade,
            estado: estado,
            foto: imageUser
        };

        if (senha === senhaConf) {
            await signUp(data);
        } else {
            return Alert.alert('Senha não confere.');
        };
    };

    const pickImage = async () => {

        const permissionResult = await Camera.requestCameraPermissionsAsync();
        if (permissionResult.status !== 'granted') {
            Alert.alert('Nós precisamos da permissão para acessar suas fotos.');
            return false
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [3, 3],
            quality: 1,
            base64: true,
        })

        setImage(pickerResult.uri);

        if (pickerResult) {
            setImageUser(pickerResult.base64);
        } else {
            setImageUser('');
        }



    };

    return (
        <Container>
            <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'height' : 'padding'} enabled>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{ top: heightPercentageToDP('4'), width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Image resizeMode='contain' style={{ width: widthPercentageToDP('40'), height: heightPercentageToDP('25'), marginBottom: heightPercentageToDP('3') }} source={Logo} />
                    </View>

                    {

                        next == false &&

                        <>
                            <FormLogin label={'Primeiro Nome'} onChangeText={(text) => setNome(text)} />

                            <FormLogin label={'Email'} typeKey={'email-address'} onChangeText={(text) => setEmail(text)} />

                            <FormLogin label={'WhatsApp  Ex: 14999999999'} typeKey={'numeric'} onChangeText={(text) => setFone(text)} />

                            <FormLogin label={'Senha'} pass={true} onChangeText={(text) => setSenha(text)} />

                            <FormLogin label={'Confirmar Senha'} pass={true} onChangeText={(text) => setSenhaConf(text)} />

                            <TxtQuestion>Ja possui uma conta? <Text onPress={() => Navigation.navigate('Login')} style={{ fontSize: RFValue(11.5), fontFamily: theme.fonts.TextBold, color: theme.colors.BlueGreen }}>Login</Text></TxtQuestion>
                        </>

                    }

                    {
                        next &&

                        <>
                            <FormCity>
                                <Icon>
                                    <MaterialCommunityIcons name="city-variant-outline" size={RFValue(19.5)} color={theme.colors.grayDark} />
                                </Icon>
                                <InputCity autoCorrect={false} placeholder='Cidade' onChangeText={(text) => setCidade(text)} />
                            </FormCity>

                                <RNPickerSelect
                                    onValueChange={(value) => setEstado(value)}
                                    items={[
                                        { label: 'AC', value: 'AC' },
                                        { label: 'AL', value: 'AL' },
                                        { label: 'AP', value: 'AP' },
                                        { label: 'AM', value: 'AM' },
                                        { label: 'BA', value: 'BA' },
                                        { label: 'CE', value: 'CE' },
                                        { label: 'DF', value: 'DF' },
                                        { label: 'ES', value: 'ES' },
                                        { label: 'GO', value: 'GO' },
                                        { label: 'MA', value: 'MA' },
                                        { label: 'MT', value: 'MT' },
                                        { label: 'MS', value: 'MS' },
                                        { label: 'MG', value: 'MG' },
                                        { label: 'PA', value: 'PA' },
                                        { label: 'PB', value: 'PB' },
                                        { label: 'PR', value: 'PR' },
                                        { label: 'PE', value: 'PE' },
                                        { label: 'PI', value: 'PI' },
                                        { label: 'RJ', value: 'RJ' },
                                        { label: 'RN', value: 'RN' },
                                        { label: 'RS', value: 'RS' },
                                        { label: 'RO', value: 'RO' },
                                        { label: 'RR', value: 'RR' },
                                        { label: 'SC', value: 'SC' },
                                        { label: 'SP', value: 'SP' },
                                        { label: 'SE', value: 'SE' },
                                        { label: 'TO', value: 'TO' }
                                    ]}
                                    doneText='Pronto'
                                    placeholder={{ label: 'Estado' }}
                                    useNativeAndroidPickerStyle={false}
                                    style={{
                                        inputIOS: { width: widthPercentageToDP('25'), alignSelf: 'center', height: heightPercentageToDP('5.5'), borderRadius: widthPercentageToDP('2'), textAlign: 'center', alignItems: 'center', backgroundColor: theme.colors.colorImage, marginTop: heightPercentageToDP('1'), color: theme.colors.grayDark },
                                        inputAndroid: { width: widthPercentageToDP('25'), alignSelf: 'center', height: heightPercentageToDP('5.5'), borderRadius: widthPercentageToDP('2'), textAlign: 'center', alignItems: 'center', backgroundColor: theme.colors.colorImage, marginTop: heightPercentageToDP('1'), color: theme.colors.grayDark }
                                    }}
                                />


                        </>
                    }

                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        {
                            next ?

                                <>

                                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>

                                        <ButtonLogin onPress={handleContinue}>
                                            <BtnTitle>Voltar</BtnTitle>
                                        </ButtonLogin>

                                        <ButtonLogin onPress={handleSendData}>
                                            <BtnTitle>Cadastrar</BtnTitle>
                                        </ButtonLogin>

                                    </View>
                                </>

                                :

                                <>
                                    <ButtonLogin onPress={handleContinue}>
                                        <BtnTitle>Continuar</BtnTitle>
                                    </ButtonLogin>
                                </>

                        }
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </Container >
    );
}