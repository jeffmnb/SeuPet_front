import React from 'react';

import {
    Container
} from './styles';

import LottieView from 'lottie-react-native';

import LoadAnimation from '../../assets/load.json';
import { RFValue } from 'react-native-responsive-fontsize';

export const Load = () => {
    return (
        <Container>
            <LottieView source={LoadAnimation} resizeMode={'cover'} autoPlay loop style={{ width: RFValue(160), height: RFValue(160) }} />
        </Container>
    );
}