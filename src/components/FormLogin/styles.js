import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import theme from '../../theme';

export const Container = styled.View`
    width: 100%;
    height: ${hp('7')};
    background-color: ${theme.colors.colorImage};
    border-radius: ${wp('4')};
    flex-direction: row;
    margin-bottom: ${hp('3')};
`;

export const AreaIcon = styled.View`
    width: ${wp('10')};
    height: ${hp('7')};
    justify-content: center;
    align-items: center;
    margin-left: ${wp('2')};
`;

export const Input = styled.TextInput`
    flex: 1;
    margin-left: ${wp('2')};
    width: 100%;
    color: ${theme.colors.grayDark};
    font-size: ${RFValue(12.5)}px;
    font-family: ${theme.fonts.Text};
`;
