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
    margin-top: ${hp('5')};
    margin-bottom: ${hp('3')};
`;

export const BtnTitle = styled.Text`
    font-family: ${theme.fonts.TextBold};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.shape};
`;

export const FormCity = styled.View`
    width: ${wp('70')};
    height: ${hp('7')};
    align-self: center;
    background-color: ${theme.colors.colorImage};
    border-radius: ${wp('4')};
    flex-direction: row;
    margin-bottom: ${hp('3')};
`;

export const Icon = styled.View`
    width: ${wp('10')};
    height: ${hp('7')};
    justify-content: center;
    align-items: center;
    margin-left: ${wp('2')};
`;

export const InputCity = styled.TextInput`
    flex: 1;
    margin-left: ${wp('2')};
    width: 100%;
    color: ${theme.colors.grayDark};
    font-size: ${RFValue(12.5)}px;
    font-family: ${theme.fonts.Text};
`;

export const BtnSelectimage = styled.TouchableOpacity`
    width: ${RFValue('80')};
    height: ${RFValue('80')};
    border-radius: ${wp('20')};
    background-color: ${theme.colors.colorImage};
    justify-content: center;
    align-items: center;
    margin-bottom:${hp('8')};
    margin-top: ${hp('2')};
    align-self:center;
`;

export const TxtChoosePhoto = styled.Text`
    color: ${theme.colors.grayDark};
    font-size: ${RFValue(12.5)}px;
    font-family: ${theme.fonts.Text};
    margin-top: ${hp('5')};
    text-align: center;
`;