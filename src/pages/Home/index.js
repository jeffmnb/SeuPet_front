import React, { useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { FlatList, Image, LogBox, Platform, StatusBar, Text, TouchableOpacity, View } from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { FontAwesome5, AntDesign } from '@expo/vector-icons';

import {
  Container,
  Header,
  TxtWelcome,
  TxtQuestion,
  AreaEmoji,
  AreaInput,
  InputSearch,
  TxtAll,
  AreaInfo,
  TxtLength,
  TxtNotPetFiltered,
  TxtNotData
} from './styles';

import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../theme';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import { CardCategoryPet } from '../../components/CardCategoryPet';

import pets from '../../utils/petsIcon';
import { CardPet } from '../../components/CardPet';

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../hooks/Auth';

import { allPets, userDataStoraged } from '../../hooks/Auth';

import { Load } from '../../components/Load';

export const Home = () => {

  const { getAllPets } = useContext(AuthContext);

  const [ALLPETS, SETALLPETS] = useState([]);

  const [petsFiltered, setPetsFiltered] = useState(null);

  const [categotySelected, setCategotySelected] = useState('');

  const [searchPet, setSearchPet] = useState(null);

  const [petSearch, setPetSearch] = useState('');

  const [loading, setLoading] = useState();

  useFocusEffect(useCallback(() => {
    getAllPets();

    setTimeout(() => {
      SETALLPETS(allPets);
      setPetsFiltered(null);
      setSearchPet(null);
      getAllPets();
    }, 100);

  }, []));

  useLayoutEffect(() => {
    getAllPets();

    setTimeout(() => {
      SETALLPETS(allPets);
      setPetsFiltered(null);
      setSearchPet(null);
      getAllPets();
    }, 100);
  }, []);

  const Navigation = useNavigation();


  const filteringPets = (category) => {

    const filter = ALLPETS.filter(item => item.tipo == category.value);

    setCategotySelected(category.title);
    setPetsFiltered(filter);

    //console.log(petsFiltered);

  };

  const filteringPetsBySearch = () => {

    setCategotySelected('');

    const filter = ALLPETS.filter(item => item.nome == searchPet);

    if (searchPet == null || searchPet == '' || searchPet == '') {
      return setPetsFiltered(null);
    };

    setPetsFiltered(filter);
    setPetSearch(searchPet);

    // console.log(petsFiltered);
  };

  if (!allPets) {
    return <Load />
  }

  return (
    <Container style={Platform.OS == 'ios' && { paddingTop: getStatusBarHeight() }}>

      <Header>

        <View>
          <TxtWelcome>Olá, {userDataStoraged.nome}</TxtWelcome>
          <TxtQuestion>Pronto para ter um amigo?</TxtQuestion>
        </View>

        <AreaEmoji>
          <FontAwesome5 name="dog" size={RFValue(23)} color={theme.colors.GraySubTitle} />
          <FontAwesome5 name="cat" size={RFValue(22)} color={theme.colors.GraySubTitle} />
        </AreaEmoji>

      </Header>

      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: heightPercentageToDP('3.5') }}>
        <AreaInput>
          <InputSearch autoCorrect={false} placeholder='Procure os pets pelo nome' placeholderTextColor={theme.colors.GraySubTitle} onChangeText={text => setSearchPet(text)} />

          <TouchableOpacity onPress={filteringPetsBySearch}>
            <AntDesign style={{ marginLeft: Platform.OS == 'ios' ? widthPercentageToDP('3') : widthPercentageToDP('4.5') }} name="search1" size={RFValue(20)} color={theme.colors.Dark} />
          </TouchableOpacity>

        </AreaInput>
      </View>

      <View>
        <FlatList
          data={pets}
          keyExtractor={item => String(item.title)}
          renderItem={({ item }) => (
            <CardCategoryPet image={item.icon} text={item.title} onpress={() => filteringPets(item)} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginLeft: widthPercentageToDP('5'), marginTop: heightPercentageToDP('3') }}
        />
      </View>

      <AreaInfo>
        <TxtAll>Todos</TxtAll>
        <TxtLength>{petsFiltered ? petsFiltered.length : allPets.length} Pet(s)</TxtLength>
      </AreaInfo>

      <View style={{ flex: 1 }}>

        {
          allPets.length == 0 && !petsFiltered

          && <TxtNotData>Todos os Pets foram doados 😍 {'\n'} Volte mais tarde 🙏</TxtNotData>
        }

        <FlatList
          data={petsFiltered !== null ? petsFiltered : allPets}
          keyExtractor={item => String(item._id)}
          renderItem={({ item }) => (
            <CardPet nome={item.nome} foto={item.foto} sexo={item.sexo} tamanho={item.tamanho} descricao={item.descricao} onpress={() => Navigation.navigate('AboutPet', { pet: item })} />
          )}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: heightPercentageToDP('2') }}
        />
      </View>

      {
        petsFiltered !== null && petsFiltered.length == 0
        &&
        //<TxtNotPetFiltered>{searchPet != null ? `Não achamos nenhum ${petSearch} em nosso centro.` : `No momento não temos ${categotySelected} ${'\n'} para adoção 🙁`}</TxtNotPetFiltered>
        <TxtNotPetFiltered>{categotySelected !== '' ? `No momento não temos ${categotySelected} ${'\n'} para adoção 🙁` : `Não achamos nenhum ${petSearch} em nosso centro.`}</TxtNotPetFiltered>

      }

    </Container>
  );
}