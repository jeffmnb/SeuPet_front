import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import theme from '../../theme';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Platform } from 'react-native';

export const Container = styled.View`
    width: ${wp('90')};
    margin-left: ${wp('5')};
    margin-right: ${wp('5')};
    height: ${hp('25')};
    border-width: 0.5;
    border-radius: ${wp('4')};
    border-color: ${theme.colors.GraySubTitle};
    padding-top: ${RFValue(6)}px;
    padding-left: ${RFValue(6.2)}px;
    flex-direction: row;
    margin-bottom: ${hp('3')};
`;

export const AreaInfoPet = styled.View`
    flex: 1;
    margin-left: ${wp('4')};
`;

export const TxtName = styled.Text`
    font-family: ${theme.fonts.TextBold};
    font-size: ${RFValue(22)}px;
    color: ${theme.colors.Dark};
`;

export const TxtInfo = styled.Text`
    font-family: ${theme.fonts.TextBold};
    font-size: ${RFValue(12)}px;
    color: ${theme.colors.grayDark};
`;

export const TxtDescription = styled.Text`
    font-family: ${theme.fonts.Text};
    font-size: ${RFValue(12.5)}px;
    color: ${theme.colors.GraySubTitle};
    text-align: left;
    margin-top: ${hp('2')};
    height: ${Platform.OS == 'ios' ? RFValue('55') : RFValue('40')}
`;

export const BtnContact = styled.TouchableOpacity`
    width: ${wp('25')};
    height: ${hp('4')};
    background-color: ${theme.colors.BlueGreen};
    justify-content: center;
    align-items: center;
    border-radius: ${wp('2')};
    margin-top: ${hp('1.4')};
`;

export const TxtBtn = styled.Text`
    font-family: ${theme.fonts.TextBold};
    font-size: ${RFValue(12)}px;
    color: ${theme.colors.shape};
`;