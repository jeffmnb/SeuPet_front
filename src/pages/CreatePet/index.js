import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Alert, Image, Platform, ScrollView, Text, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { FormCreatePet } from '../../components/FormCreatePet';
import theme from '../../theme';

import RNPickerSelect from 'react-native-picker-select';

import { Ionicons } from '@expo/vector-icons';

import {
    Container,
    Header,
    Title,
    AreaForm,
    AreaForm2,
    Titlebtn,
    TitleDescription,
    FormDescription,
    TitlePicker,
    BtnSelectimage
} from './styles';

import { Load } from '../../components/Load';

import { useFocusEffect } from '@react-navigation/native';

import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';

import { AuthContext, userDataStoraged } from '../../hooks/Auth';

import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import { Buffer } from 'buffer';

import { decode as base64_decode, encode as base64_encode } from 'base-64';

import jsscompress from "js-string-compression";


export const CreatePet = () => {

    const { createNewPet } = useContext(AuthContext);

    const [next, setNext] = useState(false);
    const [loading, setLoading] = useState(false);

    const [base64Image, setBase64Image] = useState();


    const [nome, setNome] = useState('');
    const [sexo, setSexo] = useState('');
    const [porte, setPorte] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [descricao, setDescricao] = useState('');
    const [tipo, setTipo] = useState('');
    const [foto, setFoto] = useState('');


    const [image, setImage] = useState(null);
    const [imagePet, setImagePet] = useState();

    useFocusEffect(useCallback(() => {
        setLoading(false);
        setNext(false);
    }, []));

    const handleBackForm = () => {
        setNext(false);
    }

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

        setImagePet(pickerResult.base64);

    };


    const handleContinue = async () => {

        setNext(true);

        if (next) {
            setLoading(true);

            const data = {
                nome,
                sexo,
                porte,
                tamanho,
                descricao,
                tipo,
                cidade: userDataStoraged.cidade,
                estado: userDataStoraged.estado,
                telefoneDono: userDataStoraged.telefone,
                dono: userDataStoraged.nome,
                idDono: userDataStoraged._id,
                foto: imagePet,
                fotoDono: userDataStoraged.foto
            };

            if (nome != '' && sexo != '' && porte != '' && tamanho != '' && descricao != '' && tipo != '' && imagePet != undefined) {
                setLoading(true);
                const result = await createNewPet(data);

                if (result) {
                    setLoading(false);
                    setTimeout(() => {
                        setLoading(false);
                        setImage(null);
                    }, 500);
                } else {
                    setTimeout(() => {
                        setLoading(false);
                        setImage(null);
                    }, 500);
                }
            } else {
                Alert.alert('Favor preencher todos os campos!');
            }



        };

    };

    if (loading) {
        return <Load />
    }

    return (
        <Container style={{ paddingTop: Platform.OS == 'ios' ? getStatusBarHeight() + RFValue(18) : RFValue(25) }}>
            <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'height' : 'padding'} enabled>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Header>
                        <Title>Hey, faça agora {'\n'} sua doação ❤️</Title>
                    </Header>

                    {next == false ?

                        <AreaForm style={{ display: 'flex' }}>
                            <FormCreatePet onchangetext={(text) => setNome(text)} size={55} title={'Qual o nome do seu pet ?'} />

                            <View style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginBottom: heightPercentageToDP('5') }}>
                                <TitleDescription>Sexo:</TitleDescription>

                                <View style={{ borderRadius: 10, overflow: 'hidden' }}>
                                    <RNPickerSelect
                                        onValueChange={(value) => setSexo(value)}
                                        items={[
                                            { label: 'Macho', value: 'Macho' },
                                            { label: 'Fêmea', value: 'Fêmea' },
                                        ]}
                                        doneText='Pronto'
                                        placeholder={{ label: 'Escolher' }}
                                        style={{
                                            inputIOS: { width: widthPercentageToDP('30'), height: heightPercentageToDP('5.5'), borderRadius: widthPercentageToDP('2'), textAlign: 'center', alignItems: 'center', backgroundColor: theme.colors.colorImage, color: theme.colors.grayDark },
                                            inputAndroid: { width: widthPercentageToDP('33'), height: heightPercentageToDP('5.5'), borderRadius: widthPercentageToDP('20'), textAlign: 'center', alignItems: 'center', backgroundColor: theme.colors.colorImage, color: theme.colors.grayDark }
                                        }}
                                    />
                                </View>


                            </View>

                            <View style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginBottom: heightPercentageToDP('5') }}>
                                <TitleDescription>Porte:</TitleDescription>

                                <View style={{ borderRadius: 10, overflow: 'hidden' }}>
                                    <RNPickerSelect
                                        onValueChange={(value) => setPorte(value)}
                                        items={[
                                            { label: 'Pequeno', value: 'Pequeno' },
                                            { label: 'Médio', value: 'Médio' },
                                            { label: 'Grande', value: 'Grande' },
                                            { label: 'Dúvida', value: 'Dúvida' },
                                        ]}
                                        doneText='Pronto'
                                        placeholder={{ label: 'Escolher' }}
                                        style={{
                                            inputIOS: { width: widthPercentageToDP('30'), height: heightPercentageToDP('5.5'), borderRadius: widthPercentageToDP('2'), textAlign: 'center', alignItems: 'center', backgroundColor: theme.colors.colorImage, color: theme.colors.grayDark },
                                            inputAndroid: { width: widthPercentageToDP('33'), height: heightPercentageToDP('5.5'), borderRadius: widthPercentageToDP('2'), textAlign: 'center', alignItems: 'center', backgroundColor: theme.colors.colorImage, color: theme.colors.grayDark }
                                        }}
                                    />
                                </View>


                            </View>

                            <View style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginBottom: heightPercentageToDP('5') }}>
                                <TitleDescription>Tamanho:</TitleDescription>

                                <View style={{ borderRadius: 10, overflow: 'hidden' }}>
                                    <RNPickerSelect
                                        onValueChange={(value) => setTamanho(value)}
                                        items={[
                                            { label: 'Filhote', value: 'Filhote' },
                                            { label: 'Adulto', value: 'Adulto' },
                                        ]}
                                        doneText='Pronto'
                                        placeholder={{ label: 'Escolher' }}
                                        style={{
                                            inputIOS: { width: widthPercentageToDP('30'), height: heightPercentageToDP('5.5'), borderRadius: widthPercentageToDP('2'), textAlign: 'center', alignItems: 'center', backgroundColor: theme.colors.colorImage, color: theme.colors.grayDark },
                                            inputAndroid: { width: widthPercentageToDP('33'), height: heightPercentageToDP('5.5'), borderRadius: widthPercentageToDP('2'), textAlign: 'center', alignItems: 'center', backgroundColor: theme.colors.colorImage, color: theme.colors.grayDark }
                                        }}
                                    />

                                </View>

                            </View>

                        </AreaForm>

                        :

                        <AreaForm style={{ display: 'none' }}>
                            <FormCreatePet size={55} title={'Qual o nome do seu pet ?'} />
                            <FormCreatePet size={25} title={'Ele é Macho ou Fêmea ?'} />
                            <FormCreatePet size={25} title={'Qual a idade dele(a) em anos ?'} />
                            <FormCreatePet size={25} title={'Seu pet é Filhote ou Adulto ?'} />
                        </AreaForm>}



                    {next ?

                        <AreaForm2 style={{ display: 'flex' }}>
                            <TitleDescription>Faça uma breve descrição:</TitleDescription>

                            <View>
                                <FormDescription autoCorrect={false} onChangeText={(text) => setDescricao(text)} multiline maxLength={200} />
                            </View>

                            <TitlePicker>Qual o tipo do pet?</TitlePicker>

                            <View>
                                <View style={{ borderRadius: 10, overflow: 'hidden' }}>
                                    <RNPickerSelect
                                        onValueChange={(value) => setTipo(value)}
                                        items={[
                                            { label: 'Cachorro', value: 'Cachorro' },
                                            { label: 'Gato', value: 'Gato' },
                                            { label: 'Roedor', value: 'Roedor' },
                                            { label: 'Pássaro', value: 'Pássaro' },
                                            { label: 'Outro', value: 'Outro' },
                                        ]}
                                        doneText='Pronto'
                                        placeholder={{ label: 'Escolher' }}
                                        style={{ inputIOS: { width: widthPercentageToDP('35'), height: heightPercentageToDP('5.5'), borderRadius: widthPercentageToDP('2'), textAlign: 'center', alignItems: 'center', backgroundColor: theme.colors.colorImage, color: theme.colors.grayDark }, inputAndroid: { width: widthPercentageToDP('35'), height: heightPercentageToDP('5.5'), borderRadius: widthPercentageToDP('2'), textAlign: 'center', alignItems: 'center', backgroundColor: theme.colors.colorImage, color: theme.colors.grayDark } }}
                                    />
                                </View>
                            </View>

                            <TitlePicker>Selecione uma foto dele 😊</TitlePicker>

                            {
                                image
                                    ? <TouchableOpacity onPress={pickImage}><Image source={{ uri: image }} style={{ width: 200, height: 200, marginBottom: heightPercentageToDP('5.5'), borderRadius: widthPercentageToDP('3') }} /></TouchableOpacity>

                                    :
                                    <BtnSelectimage onPress={pickImage}>
                                        <Ionicons name="add" size={RFValue(30)} color={theme.colors.grayDark} />
                                    </BtnSelectimage>}

                        </AreaForm2>

                        :
                        <AreaForm2 style={{ display: 'none' }}>
                            <TitleDescription>Faça uma breve descrição:</TitleDescription>
                            <FormDescription multiline maxLength={200} />

                            <TitlePicker>Qual o tipo do pet?</TitlePicker>

                            <View>
                                <RNPickerSelect
                                    onValueChange={(value) => setTipo(value)}
                                    items={[
                                        { label: 'Cachorro', value: 'Cachorro' },
                                        { label: 'Gato', value: 'Gato' },
                                        { label: 'Roedor', value: 'Roedor' },
                                        { label: 'Pássaro', value: 'Pássaro' },
                                        { label: 'Outro', value: 'Outro' },
                                    ]}
                                    doneText='Pronto'
                                    placeholder={{ label: 'Escolher' }}
                                    style={{
                                        inputIOS: { width: widthPercentageToDP('35'), height: heightPercentageToDP('5.5'), borderRadius: widthPercentageToDP('2'), textAlign: 'center', alignItems: 'center', backgroundColor: theme.colors.colorImage, color: theme.colors.grayDark },
                                        inputAndroid: { width: widthPercentageToDP('33'), height: heightPercentageToDP('5.5'), borderRadius: widthPercentageToDP('2'), textAlign: 'center', alignItems: 'center', backgroundColor: theme.colors.colorImage, color: theme.colors.grayDark }
                                    }}
                                />
                            </View>

                            <TitlePicker>Selecione uma foto dele 😊</TitlePicker>

                            {
                                image
                                    ? <TouchableOpacity onPress={pickImage}><Image source={{ uri: image }} style={{ width: 200, height: 200, marginBottom: heightPercentageToDP('5.5'), borderRadius: widthPercentageToDP('3') }} /></TouchableOpacity>

                                    :
                                    <BtnSelectimage onPress={pickImage}>
                                        <Ionicons name="add" size={RFValue(30)} color={theme.colors.grayDark} />
                                    </BtnSelectimage>}

                        </AreaForm2>

                    }

                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', alignItems: 'center', marginBottom: heightPercentageToDP('8') }}>

                        {next
                            && <TouchableOpacity>
                                <Text onPress={handleBackForm} style={{ fontFamily: theme.fonts.TextBold, fontSize: RFValue(15), color: theme.colors.BlueGreen }}>Voltar</Text>
                            </TouchableOpacity>}

                        <TouchableOpacity style={{ borderRadius: widthPercentageToDP('3'), justifyContent: 'center', alignItems: 'center', width: widthPercentageToDP('30'), height: heightPercentageToDP(6), backgroundColor: theme.colors.BlueGreen }}>
                            <Titlebtn onPress={handleContinue}>{next ? 'Doar🙏' : 'Continuar'}</Titlebtn>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </Container >
    );
};