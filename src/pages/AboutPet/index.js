import React, { useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { Image, Platform, StatusBar, Text, TouchableOpacity, View, Linking } from 'react-native';

import {
    Container,
    TxtName,
    AreaLocation,
    TxtLocation,
    AreaAbout,
    BoxAge,
    TitleAge,
    DataAge,
    BoxSex,
    TitleSex,
    DataSex,
    BoxSize,
    TitleSize,
    DataSize,
    TitleDescription,
    AreaDescription,
    TxtDescription,
    AreaContact,
    AreaPerson,
    AreaTxt,
    Name,
    Owner,
    ButtonContact,
    TitleBtn
} from './styles';

import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import theme from '../../theme';

import { RFValue } from 'react-native-responsive-fontsize';

import { FontAwesome5, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';

import UserImg from '../../assets/UserImg.png';

import Costela from '../../assets/costela.jpeg';
import { AuthContext } from '../../hooks/Auth';
import axios from 'axios';

import { userDataStoraged } from '../../hooks/Auth';
import { ScrollView } from 'react-native-gesture-handler';

export const AboutPet = () => {

    const Navigation = useNavigation();

    const Routes = useRoute();

    const { pet } = Routes.params;

    const { HOST_SERVER_WS } = process.env;

    const { addNewFavoritePet, deletePetFavorite } = useContext(AuthContext);

    // console.log(pet);


    useFocusEffect(useCallback(() => {
        getPet();
        console.log(pet.fotoDono);
    }, []));


    const [liked, setLiked] = useState(false);

    const handleFavorite = async () => {

        setLiked(oldData => !oldData);

        if (liked == false) {

            await addNewFavoritePet(pet);
        } else {
            await deletePetFavorite(pet);
        }

    };


    const getPet = async () => {
        const response = await axios.get(`${HOST_SERVER_WS || '|| http://192.168.0.7:3000'}/user/${userDataStoraged._id}`);
        let petsLiked = response.data.user.petFavorites;

        const petExist = petsLiked.some(item => item._id == pet._id);

        if (petExist) {
            setLiked(true);
        }
    };

    const handleCallWhats = () => {

        const message = `Olá, sou ${userDataStoraged.nome}, e gostaria de saber sobre o pet ${pet.nome}.`

        Linking.openURL(`whatsapp://send?text=${message}&phone=+55${pet.telefoneDono}`)
    };

    return (
        <Container>
            <StatusBar barStyle='dark-content' />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ width: '100%', paddingTop: Platform.OS == 'ios' ? heightPercentageToDP('8') : heightPercentageToDP('4'), marginBottom: heightPercentageToDP('2'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                    <TouchableOpacity>
                        <FontAwesome5 onPress={() => Navigation.goBack()} name="arrow-left" size={RFValue(22)} color={theme.colors.BlueGreen} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleFavorite}>

                        {
                            liked

                                ? <MaterialIcons name="favorite" size={RFValue(28)} color={theme.colors.BlueGreen} />

                                : <MaterialIcons name="favorite-border" size={RFValue(28)} color={theme.colors.BlueGreen} />

                        }
                    </TouchableOpacity>

                </View>

                <Image source={{ uri: `data:image/jpeg;base64,${pet.foto}` }} resizeMode='contain' style={{ borderRadius: Platform.OS == 'ios' ? widthPercentageToDP('5') : widthPercentageToDP('9'), alignSelf: 'center', width: RFValue('200'), height: RFValue('200') }} />

                <TxtName>{pet.nome}</TxtName>
                <AreaLocation>
                    <Ionicons name="location-sharp" size={RFValue(18)} color={theme.colors.BlueGreen} />
                    <TxtLocation> {pet.cidade}, {pet.estado}</TxtLocation>
                </AreaLocation>

                <AreaAbout>
                    <BoxAge>
                        <TitleAge>Idade</TitleAge>
                        <DataAge>{pet.tamanho}</DataAge>
                    </BoxAge>

                    <BoxSex>
                        <TitleSex>Sexo</TitleSex>
                        <DataSex>{pet.sexo}</DataSex>
                    </BoxSex>

                    <BoxSize>
                        <TitleSize>Porte</TitleSize>
                        <DataSize>{pet.porte}</DataSize>
                    </BoxSize>
                </AreaAbout>

                <TitleDescription>Descrição</TitleDescription>

                <AreaDescription>
                    <TxtDescription>{pet.descricao}</TxtDescription>
                </AreaDescription>

                <AreaContact>
                    <AreaPerson>
                        {
                            pet.fotoDono === null

                           ? <Image style={{ width: RFValue(42), height: RFValue(42), borderRadius: RFValue(30) }} source={UserImg} />
                       
                           : <Image style={{ width: RFValue(42), height: RFValue(42), borderRadius: RFValue(30) }} source={{uri: `data:image/jpeg;base64,${pet.fotoDono}`}} />
                        }
                        <AreaTxt>
                            <Name>{pet.dono}</Name>
                            <Owner>Dono(a)</Owner>
                        </AreaTxt>

                    </AreaPerson>

                    <ButtonContact onPress={handleCallWhats}>
                        <TitleBtn>Conversar</TitleBtn>
                    </ButtonContact>
                </AreaContact>

            </ScrollView>
        </Container>
    );
}