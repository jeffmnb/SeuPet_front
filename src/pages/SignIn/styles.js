import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import theme from '../../theme';

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.colors.shape};
    padding-left: ${wp('9')};
    padding-right: ${wp('9')};
`;

export const TxtQuestion = styled.Text`
    text-align: center;
    font-family: ${theme.fonts.Text};
    font-size: ${RFValue(11.2)}px;
    color: ${theme.colors.grayDark};
    line-height: ${RFValue(23)}px;
`;

export const ButtonLogin = styled.TouchableOpacity`
    width: ${wp('30')};
    height: ${hp('5.5')};
    background-color: ${theme.colors.BlueGreen};
    border-radius:${wp('3')};
    justify-content: center;
    align-items: center;
    margin-top: ${hp('8')};
`;

export const BtnTitle = styled.Text`
    font-family: ${theme.fonts.TextBold};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.shape};
`; 
