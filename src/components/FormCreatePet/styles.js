import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import theme from '../../theme';

export const Container = styled.View`
    height: ${hp('8')};
    justify-content: space-around;
    padding-left: ${wp('7')};
    padding-right: ${wp('7')};
    margin-bottom: ${hp('5.5')};
    align-items: center;
`;

export const Title  =styled.Text`
    font-family: ${theme.fonts.Text};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.Dark};
    margin-bottom: ${hp('3')};
`;

export const FormPet = styled.TextInput`
    background-color: ${theme.colors.colorImage};
    height: ${hp('5.5')};
    border-radius: ${wp('2')};
    color: ${theme.colors.grayDark};
    text-align: center;
`;