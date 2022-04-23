import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import theme from '../../theme';
import { Platform } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.colors.shape};
`;

export const Header = styled.View`
    width: 100%;
    height: ${hp('9')};
    justify-content: center;
    align-items: center;
    margin-bottom: ${hp('6')};
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.TextBold};
    font-size: ${RFValue(22)}px;
    color: ${theme.colors.BlueGreen};
    text-align: center;
    line-height: ${RFValue(30)};
`;

export const AreaForm = styled.View`
    width: 100%;
`;

export const AreaForm2 = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;

`;

export const Titlebtn = styled.Text`
    font-family: ${theme.fonts.TextBold};
    font-size: ${RFValue(15)};
    color: ${theme.colors.shape};
`;

export const TitleDescription = styled.Text`
    font-family: ${theme.fonts.Text};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.Dark};
    margin-bottom: ${hp('2')};
`;

export const FormDescription = styled.TextInput`
    width: ${wp('90')};
    background-color: ${theme.colors.colorImage};
    height: ${hp('15')};
    border-radius: ${wp('2')};
    color: ${theme.colors.grayDark};
    padding-left: ${Platform.OS == 'ios' ? wp('5') : wp('5')};
    padding-right: ${Platform.OS == 'ios' ? wp('5') : wp('5')};
    padding-top: ${Platform.OS == 'ios' ? hp('2') : hp('0')};
    text-align: left;
`;

export const TitlePicker = styled.Text`
    font-family: ${theme.fonts.Text};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.Dark};
    margin-bottom: ${hp('2')};
    margin-top: ${hp('5')};
`;

export const BtnSelectimage = styled.TouchableOpacity`
    width: ${wp('20')};
    height: ${hp('9')};
    border-radius: ${wp('3')};
    background-color: ${theme.colors.colorImage};
    justify-content: center;
    align-items: center;
    margin-bottom:${hp('8')};
`;