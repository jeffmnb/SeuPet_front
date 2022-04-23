import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import theme from '../../theme';

export const Container = styled.TouchableOpacity`
    margin-right: ${wp('4')};
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.Text};
    font-size: ${RFValue(11.7)}px;
    color: ${theme.colors.Dark};
    margin-top: ${hp('0.5')};
`;