import React, { useEffect } from 'react';
import { Image, Text } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';

import ImageWelcome from '../../assets/imageWelcome.jpg';

import { LinearGradient } from 'expo-linear-gradient';

import { FontAwesome } from '@expo/vector-icons';

import {
    Container,
    AreaText,
    Title,
    SubTitle,
    Button,
    TxtButton
} from './styles';

import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../theme';

import { useNavigation } from '@react-navigation/native';

export const Welcome = () => {

    const Navigation = useNavigation();

    return (
        <Container>
            <Image source={ImageWelcome} style={{ width: '120%', height: heightPercentageToDP('100') }} />

            <AreaText>
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,1)']}
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                >
                    <Title>Encontre um novo {'\n'}Amigo</Title>

                    <SubTitle>Adote o pet que você sempre quis ter. {'\n'}Eles merecem um lar 🤍</SubTitle>

                    <Button onPress={() => Navigation.navigate('Login')}>
                        <TxtButton>Continue</TxtButton>
                        <FontAwesome name="arrow-right" size={RFValue(14)} color={theme.colors.BlueGreen} />
                    </Button>

                </LinearGradient>
            </AreaText>
        </Container >
    );
}