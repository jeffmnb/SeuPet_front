import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import theme from '../../theme';
import { Platform } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.colors.shape};
    padding-left: ${wp('5')};
    padding-right: ${wp('5')};
`;

export const TxtName = styled.Text`
    font-family: ${theme.fonts.TextBold};
    font-size: ${RFValue(30)}px;
    color: ${theme.colors.Dark};
    margin-top: ${hp('2')};
`;

export const AreaLocation = styled.View`
    width: ${wp('50')};
    height: ${hp('4')};
    flex-direction: row;
    bottom: ${Platform.OS == 'ios' ? 0 : RFValue(5)}
`;

export const TxtLocation = styled.Text`
    font-family: ${theme.fonts.TextBold};
    font-size: ${RFValue(12)}px;
    color: ${theme.colors.Dark};
`;

export const AreaAbout = styled.View`
    width: 100%;
    height: ${hp('8')};
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: ${hp('1')};
`;

export const BoxAge = styled.View`
    width: ${wp('25')};
    height: ${hp('7')};
    border-width: 1;
    border-color: ${theme.colors.GraySubTitle};
    border-radius: ${wp('3')};
    justify-content: space-evenly;
    align-items: center;
`;

export const TitleAge = styled.Text`
    font-family: ${theme.fonts.TextBold};
    font-size: ${RFValue(11.5)}px;
    color: ${theme.colors.grayDark};
`;

export const DataAge = styled.Text`
    font-family: ${theme.fonts.TextBold};
    font-size: ${RFValue(12.7)}px;
    color: ${theme.colors.Dark};
`;

export const BoxSex = styled.View`
    width: ${wp('25')};
    height: ${hp('7')};
    border-width: 1;
    border-color: ${theme.colors.GraySubTitle};
    border-radius: ${wp('3')};
    justify-content: space-evenly;
    align-items: center;
`;

export const TitleSex = styled.Text`
    font-family: ${theme.fonts.TextBold};
    font-size: ${RFValue(11.5)}px;
    color: ${theme.colors.grayDark};
`;

export const DataSex = styled.Text`
    font-family: ${theme.fonts.TextBold};
    font-size: ${RFValue(12.7)}px;
    color: ${theme.colors.Dark};
`;

export const BoxSize = styled.View`
    width: ${wp('25')};
    height: ${hp('7')};
    border-width: 1;
    border-color: ${theme.colors.GraySubTitle};
    border-radius: ${wp('3')};
    justify-content: space-evenly;
    align-items: center;
`;

export const TitleSize = styled.Text`
    font-family: ${theme.fonts.TextBold};
    font-size: ${RFValue(11.5)}px;
    color: ${theme.colors.grayDark};
`;

export const DataSize = styled.Text`
    font-family: ${theme.fonts.TextBold};
    font-size: ${RFValue(12.7)}px;
    color: ${theme.colors.Dark};
`;

export const TitleDescription = styled.Text`
    font-family: ${theme.fonts.TextBold};
    font-size: ${RFValue(17.5)}px;
    color: ${theme.colors.Dark};
    margin-top: ${hp('4')};
`;

export const AreaDescription = styled.ScrollView`
    width: 100%;
    height: ${hp('18')};
    margin-top: ${hp('1.5')};
`;

export const TxtDescription = styled.Text`
    font-family: ${theme.fonts.Text};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.GraySubTitle};
    text-align: justify;
`;

export const AreaContact = styled.View`
    width: 100%;
    height: ${hp('8')};
    margin-top: ${hp('1.5')};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const AreaPerson = styled.View`
    flex-direction: row;
    width: ${wp('45')};
    height: ${hp('8')};
    justify-content: flex-start;
    align-items: center;
`;

export const AreaTxt = styled.View`
    margin-left: ${wp('3.5')};
`;

export const Name = styled.Text`
    font-family: ${theme.fonts.TextBold};
    font-size: ${RFValue(12)};
    color: ${theme.colors.Dark};
`;

export const Owner = styled.Text`
    font-family: ${theme.fonts.TextBold};
    font-size: ${RFValue(10.7)};
    color: ${theme.colors.GraySubTitle};
`;

export const ButtonContact = styled.TouchableOpacity`
    width: ${wp('30')};
    height: ${hp('5')};
    background-color: ${theme.colors.BlueGreen};
    justify-content: center;
    align-items: center;
    border-radius: ${wp('2')};
`;

export const TitleBtn = styled.Text`
    font-family: ${theme.fonts.TextBold};
    color: ${theme.colors.shape};
    font-size: ${RFValue(12)}px;
`;