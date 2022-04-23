import React from 'react';
import { Image, Text } from 'react-native';

import {
    Container,
    Title
} from './styles';

import Dog from '../../assets/dog.png';
import { RFValue } from 'react-native-responsive-fontsize';

export const CardCategoryPet = ({image, text, onpress}) => {
    return (
        <Container onPress={onpress}>
            <Image source={image} style={{ width: RFValue(60), height: RFValue(60) }} />

            <Title>{text}</Title>

        </Container>
    );
}