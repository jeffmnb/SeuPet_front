import React from 'react';
import { Image, Platform, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import {
    Container,
    AreaInfoPet,
    TxtName,
    TxtInfo,
    TxtDescription,
    BtnContact,
    TxtBtn
} from './styles';

import Costela from '../../assets/costela.jpeg';

export const CardPet = ({ onpress, nome, tamanho, sexo, descricao, ownPet, foto }) => {
    return (
        <Container>
            <Image source={{ uri: `data:image/jpeg;base64,${foto}` }} style={{ borderRadius: RFValue(10), width: widthPercentageToDP('40'), height: heightPercentageToDP('23.2') }} />

            <AreaInfoPet>
                <TxtName>{nome}</TxtName>
                <TxtInfo>{sexo} - {tamanho}</TxtInfo>

                <View style={{ width: Platform.OS == 'ios' ? '85%' : '90%' }} >
                    <TxtDescription>{descricao}</TxtDescription>
                </View>


                <BtnContact onPress={onpress}>
                    <TxtBtn>{ownPet ? 'Excluir' : 'Ver mais'}</TxtBtn>
                </BtnContact>
            </AreaInfoPet>
        </Container >
    );
}