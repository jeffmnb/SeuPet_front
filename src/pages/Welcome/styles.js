import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import theme from '../../theme';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const AreaText = styled.View`
    width: 100%;
    height: ${hp('50')};
    position: absolute;
    bottom: 0;
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.TitleWelcome};
    font-size: ${RFValue(40)}px;
    color: ${theme.colors.shape};
    margin-top: ${hp('12')};
    text-align: center;
`;

export const SubTitle = styled.Text`
    font-family: ${theme.fonts.Text};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.GraySubTitle};
    margin-top: ${hp('2')};
    text-align: center;
    margin-bottom: ${hp('4')};
`;

export const Button = styled.TouchableOpacity`
    width: ${wp('35')};
    height: ${hp('6')};
    border-radius: ${RFValue(10)}px;
    background-color: ${theme.colors.shape};
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: ${hp('3')};
`;

export const TxtButton = styled.Text`
    font-family: ${theme.fonts.TextBold};
    color: ${theme.colors.BlueGreen};
    font-size: ${RFValue(14)}px;
    margin-right: ${wp('3')};
`;