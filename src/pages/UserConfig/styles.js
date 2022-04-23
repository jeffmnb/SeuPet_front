import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import theme from '../../theme';
import { Platform } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.colors.shape};
    padding-top: ${Platform.OS == 'android' ? hp('6.5') : hp('8')};
`;

export const BtnConfig = styled.TouchableOpacity`
    width: 100%;
    height: ${hp('6')};
    border-top-width:0.5;
    border-top-color: ${theme.colors.grayDark};
    align-items:center;
    justify-content: flex-start;
    padding-left: ${wp('5')};
    flex-direction: row;
`;

export const TxtConfig = styled.Text`
    font-family: ${theme.fonts.Text};
    color: ${theme.colors.grayDark};
    font-size: ${RFValue(14)}px;
    margin-left: ${wp('3')};
    top: ${Platform.OS == 'ios' ? 0 : RFValue(3)};
`;

export const TxtConfigExit = styled.Text`
    font-family: ${theme.fonts.TextBold};
    color: ${theme.colors.red};
    font-size: ${RFValue(14)}px;
    margin-left: ${wp('3')};
    top: ${Platform.OS == 'ios' ? 0 : RFValue(3)};
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

export const ButtonSave = styled.TouchableOpacity`
    width: ${wp('30')};
    height: ${hp('5.5')};
    background-color: ${theme.colors.BlueGreen};
    border-radius:${wp('3')};
    justify-content: center;
    align-items: center;
    margin-top: ${hp('5')};
    margin-bottom: ${hp('3')};
    align-self: center;
`;

export const TxtSave = styled.Text`
    font-family: ${theme.fonts.TextBold};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.shape};
`;