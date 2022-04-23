import React, { useEffect, useRef, useState } from 'react';

import {
  Container,
  BtnConfig,
  TxtConfig,
  TxtConfigExit,
  FormCity,
  Icon,
  InputCity,
  ButtonSave,
  TxtSave
} from './styles';

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../../theme';
import { RFValue } from 'react-native-responsive-fontsize';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

// import { Modalize } from 'react-native-modalize';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import RNPickerSelect from 'react-native-picker-select';

import { FormLogin } from '../../components/FormLogin';
import axios from 'axios';

import { userDataStoraged } from '../../hooks/Auth';

export const UserConfig = () => {

  const Navigation = useNavigation();

  //const modalActived = useRef(false);

  // const [telefone, setTelefone] = useState('');
  // const [cidade, setCidade] = useState('');
  // const [estado, setEstado] = useState('');

  const handleSignOut = () => {
    Alert.alert('', 'Deseja sair?', [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => {
          signOut();
        }
      }
    ])
  };


  // const saveNewContact = async () => {

  //   const idUser = userDataStoraged._id;

  //   if (telefone == ' ' || telefone == '  ') {
  //     return Alert.alert('Campo WhatsApp vazio');
  //   };

  //   if (cidade == ' ' || cidade == '  ') {
  //     return Alert.alert('Campo Cidade vazio');
  //   };

  //   const newData = {
  //     telefone: telefone != '' ? telefone : userDataStoraged.telefone,
  //     cidade: cidade != '' ? cidade : userDataStoraged.cidade,
  //     estado: estado != '' ? estado : userDataStoraged.estado
  //   };

  //   console.log(newData);

  //   try {

  //     await axios.put(`${HOST_SERVER_WS}/:3000/user/refresh/${idUser}`, newData);

  //     Alert.alert('Dados atualizados! 😃');

  //     setTelefone('');
  //     setCidade('');
  //     setEstado('');

  //     modalActived.current?.close();

  //   } catch (error) {
  //     Alert.alert(error.message);
  //   }
  // }


  const signOut = async () => {

    await AsyncStorage.setItem('uservai', JSON.stringify(null));

    Navigation.navigate('Welcome');

  };

  return (
    <Container>

      <BtnConfig onPress={() => Navigation.navigate('MyPets')}>
        <MaterialIcons name="pets" size={RFValue(24)} color={theme.colors.grayDark} />
        <TxtConfig>Meus Pets</TxtConfig>
      </BtnConfig>

      {/* <BtnConfig onPress={() => modalActived.current?.open()} >
        <MaterialIcons name="account-circle" size={RFValue(24)} color={theme.colors.grayDark} />
        <TxtConfig>Mudar Contato</TxtConfig>
      </BtnConfig> */}

      <BtnConfig onPress={handleSignOut}>
        <MaterialIcons name="exit-to-app" size={RFValue(24)} color={theme.colors.red} />
        <TxtConfigExit>Sair</TxtConfigExit>
      </BtnConfig>


      {/* <Modalize ref={modalActived} modalHeight={heightPercentageToDP('45')} modalStyle={{ backgroundColor: theme.colors.shape, paddingHorizontal: widthPercentageToDP('15'), paddingTop: '10%' }}>

        <FormLogin label={'WhatsApp'} typeKey={'numeric'} onChangeText={(text) => setTelefone(text)} />

        <FormCity>
          <Icon>
            <MaterialCommunityIcons name="city-variant-outline" size={RFValue(19.5)} color={theme.colors.grayDark} />
          </Icon>
          <InputCity placeholder='Cidade' onChangeText={(text) => setCidade(text)} />
        </FormCity>

        <RNPickerSelect
          onValueChange={(value) => setEstado(value)}
          items={[
            { label: 'AC', value: 'AC' },
            { label: 'AL', value: 'AL' },
            { label: 'AP', value: 'AP' },
            { label: 'AM', value: 'AM' },
            { label: 'BA', value: 'BA' },
            { label: 'CE', value: 'CE' },
            { label: 'DF', value: 'DF' },
            { label: 'ES', value: 'ES' },
            { label: 'GO', value: 'GO' },
            { label: 'MA', value: 'MA' },
            { label: 'MT', value: 'MT' },
            { label: 'MS', value: 'MS' },
            { label: 'MG', value: 'MG' },
            { label: 'PA', value: 'PA' },
            { label: 'PB', value: 'PB' },
            { label: 'PR', value: 'PR' },
            { label: 'PE', value: 'PE' },
            { label: 'PI', value: 'PI' },
            { label: 'RJ', value: 'RJ' },
            { label: 'RN', value: 'RN' },
            { label: 'RS', value: 'RS' },
            { label: 'RO', value: 'RO' },
            { label: 'RR', value: 'RR' },
            { label: 'SC', value: 'SC' },
            { label: 'SP', value: 'SP' },
            { label: 'SE', value: 'SE' },
            { label: 'TO', value: 'TO' }
          ]}
          doneText='Pronto'
          placeholder={{ label: 'Estado' }}
          style={{ inputIOS: { width: widthPercentageToDP('25'), alignSelf: 'center', height: heightPercentageToDP('5.5'), borderRadius: widthPercentageToDP('2'), textAlign: 'center', alignItems: 'center', backgroundColor: theme.colors.colorImage, marginTop: heightPercentageToDP('1') }, inputAndroid: { width: widthPercentageToDP('35'), alignSelf: 'center', height: heightPercentageToDP('5.5'), borderRadius: widthPercentageToDP('2'), textAlign: 'center', alignItems: 'center', backgroundColor: theme.colors.colorImage, marginTop: heightPercentageToDP('1') } }}
        />

        <ButtonSave onPress={saveNewContact}>
          <TxtSave>Salvar</TxtSave>
        </ButtonSave>

      </Modalize> */}

    </Container>
  );
}