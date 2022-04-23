import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import theme from '../../theme';

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.colors.shape};
    align-items: center;
`;

export const Header = styled.View`
    width: 100%;
    height: ${hp('10')};
    padding-top: ${hp('4')};
    padding-left: ${wp('6')};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${hp('5')};
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

export const TxtNotData = styled.Text`
    font-family: ${theme.fonts.TextBold};
    font-size: ${RFValue(16)}px;
    color: rgba(153, 157, 158, 0.7);
    text-align: center;
    position: absolute;
    top: ${hp('50')};
`;