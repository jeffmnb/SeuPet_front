import React from 'react';

import {
    Container,
    AreaIcon,
    Input
} from './styles';

import { Fontisto, MaterialIcons, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../theme';

export const FormLogin = ({ label, onChangeText, pass, typeKey }) => {

    return (
        <Container>
            <AreaIcon>
                {
                    label == 'Email'

                        ? <Fontisto name="email" size={RFValue(19.5)} color={theme.colors.grayDark} />

                        : label == 'Primeiro Nome'

                            ? <Ionicons name="person-outline" size={RFValue(19.5)} color={theme.colors.grayDark} />

                            : label == 'Senha'

                                ? <MaterialIcons name="lock-outline" size={RFValue(19.5)} color={theme.colors.grayDark} />

                                : label == 'Confirmar Senha'

                                    ? <MaterialIcons name="lock-outline" size={RFValue(19.5)} color={theme.colors.grayDark} />

                                    : label == 'WhatsApp  Ex: 14999999999'

                                    && <SimpleLineIcons name="phone" size={RFValue(19.5)} color={theme.colors.grayDark} />
                }
            </AreaIcon>

            <Input autoCorrect={false} secureTextEntry={pass} keyboardType={typeKey} placeholder={label} onChangeText={onChangeText} placeholderTextColor={theme.colors.GraySubTitle}/>

        </Container>
    );
}