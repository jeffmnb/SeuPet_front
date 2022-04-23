import React, { useCallback, useContext, useState } from 'react';
import { Alert, FlatList, Platform, View } from 'react-native';

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
import { AuthContext, userDataStoraged } from '../../hooks/Auth';
import { CardPet } from '../../components/CardPet';
import { allPets } from '../../hooks/Auth';

export const MyPets = () => {

    const Navigation = useNavigation();

    const { getPetsCreated, deletePetCreated } = useContext(AuthContext);

    useFocusEffect(useCallback(() => {
        const getPets = async () => {

            const data = await getPetsCreated();
            setMyPets(data);

            console.log(myPets);

        };

        getPets();
    }, []));

    const [myPets, setMyPets] = useState([]);

    const handleDeletePet = async (pet) => {

        await deletePetCreated(pet);
    }

    return (
        <Container style={Platform.OS == 'ios' && { paddingTop: getStatusBarHeight() }}>

            <Header>

                <View>
                    <TxtWelcome>Seus Pets</TxtWelcome>
                    <TxtQuestion>Obrigado por fazer doações 😍</TxtQuestion>
                </View>

                <AreaEmoji>
                    <FontAwesome5 name="dog" size={RFValue(23)} color={theme.colors.GraySubTitle} />
                    <FontAwesome5 name="cat" size={RFValue(22)} color={theme.colors.GraySubTitle} />
                </AreaEmoji>

            </Header>


            {

                myPets.length == 0

                    ?
                    <TxtNotData>Você ainda não fez {'\n'} nenhuma doação.</TxtNotData>

                    :
                    <FlatList
                        data={myPets}
                        keyExtractor={item => String(item.nome)}
                        renderItem={({ item }) => (
                            <CardPet ownPet foto={item.foto} nome={item.nome} sexo={item.sexo} tamanho={item.tamanho} descricao={item.descricao} onpress={() => Alert.alert('Aviso', 'Deseja excluir esse Pet?', [
                                {
                                    text: 'Não',
                                    style: 'cancel'
                                },
                                {
                                    text: 'Sim',
                                    onPress: () => {
                                        handleDeletePet(item);
                                    }
                                }
                            ])} />
                        )}
                        showsVerticalScrollIndicator={false}
                    />
            }

        </Container>
    );
}