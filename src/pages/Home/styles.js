import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import theme from '../../theme';
import { Platform } from 'react-native';

export const Container = styled.View`
    flex:1;
    background-color: ${'rgb(250,250,250)'};
`;

export const Header = styled.View`
    width: 100%;
    height: ${hp('10')};
    margin-top: ${Platform.OS == 'android' ? hp('5') : hp('2')};
    padding-left: ${wp('6')};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TxtWelcome = styled.Text`
    font-family: ${theme.fonts.TextBold};
    font-size: ${RFValue(23)}px;
    color: ${theme.colors.BlueGreen};
`;

export const TxtQuestion = styled.Text`
    font-family: ${theme.fonts.Text};
    font-size: ${RFValue(12)}px;
    color: ${theme.colors.GraySubTitle};
`;

export const AreaEmoji = styled.View`
    width: ${wp('24')};
    flex-direction:row;
    justify-content: space-around;
    padding-right: ${wp('3.5')};
`;

export const AreaInput = styled.View`
    width: ${wp('90')};
    height: ${hp('6')};
    border-width: 0.5;
    border-radius: ${wp('4')};
    border-color: ${theme.colors.GraySubTitle};
    flex-direction: row;
    align-items: center;
    padding-left: ${wp('5')};
`;

export const InputSearch = styled.TextInput`
    width: ${wp('70')};
    height: ${hp('5.5')};
`;

export const TxtAll = styled.Text`
    font-family: ${theme.fonts.TextBold};
    font-size: ${RFValue(17)}px;
    color: ${theme.colors.Dark};
`;

export const AreaInfo = styled.View`
    width: 100%;
    height: ${hp('5')};
    flex-direction: row;
    margin-top: ${hp('4')};
    justify-content: space-between;
    align-items: center;
    padding-left: ${wp('5')};
    padding-right: ${wp('5')};
`;

export const TxtLength = styled.Text`
    font-family: ${theme.fonts.TextBold};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.Dark};
`;

export const TxtNotPetFiltered = styled.Text`
    font-family: ${theme.fonts.TextBold};
    font-size: ${RFValue(16)}px;
    color: rgba(153, 157, 158, 0.7);
    text-align: center;
    position: absolute;
    top: ${hp('60')};
    width: 100%;
`;

export const TxtNotData = styled.Text`
    font-family: ${theme.fonts.TextBold};
    font-size: ${RFValue(16)}px;
    color: rgba(153, 157, 158, 0.7);
    text-align: center;
    line-height: ${hp('4')};
    top: ${hp('12')};
`;