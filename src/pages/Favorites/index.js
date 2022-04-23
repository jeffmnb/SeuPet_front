import React, { useCallback, useContext, useState } from 'react';
import { FlatList, Platform, View } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

import {
    Container,
    Header,
    TxtQuestion,
    TxtWelcome,
    AreaEmoji,
    TxtNotData
} from './styles';

import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../hooks/Auth';

import { CardPet } from '../../components/CardPet';

export const Favorites = () => {

    const Navigation = useNavigation();

    const { getPetsFavorites } = useContext(AuthContext);

    useFocusEffect(useCallback(() => {
        getPets();
    }, []));

    const getPets = async () => {
        const pet = await getPetsFavorites();
        setPetsFavorited(pet);

        // console.log(pet);
    };

    const [petsFavorited, setPetsFavorited] = useState([]);

    return (
        <Container style={{paddingTop: Platform.OS == 'ios' ? getStatusBarHeight() : RFValue(20) }}>

            <Header>

                <View>
                    <TxtWelcome>Seus Favoritos</TxtWelcome>
                    <TxtQuestion>Qual pet você mais amou? 😍</TxtQuestion>
                </View>

                <AreaEmoji>
                    <FontAwesome5 name="dog" size={RFValue(23)} color={theme.colors.GraySubTitle} />
                    <FontAwesome5 name="cat" size={RFValue(22)} color={theme.colors.GraySubTitle} />
                </AreaEmoji>

            </Header>


            {

                petsFavorited.length == 0

                    ?
                    <TxtNotData>Poxa, você ainda não gostou {'\n'} de nenhum pet ☹️</TxtNotData>

                    :
                    <FlatList
                        data={petsFavorited}
                        keyExtractor={item => String(item._id)}
                        renderItem={({ item }) => (
                            <CardPet nome={item.nome} foto={item.foto} sexo={item.sexo} tamanho={item.tamanho} descricao={item.descricao} onpress={() => Navigation.navigate('AboutPet', { pet: item })} />
                        )}
                    />
            }

        </Container>
    );
}