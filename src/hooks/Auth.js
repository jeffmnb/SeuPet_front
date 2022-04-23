import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { Alert, Appearance } from "react-native";


export const AuthContext = createContext({});

export let userDataStoraged; // DADOS DO USUARIO SALVO NO STORAGE;

export let allPets = []; //DADOS BUSCANDO DE TODOS OS PETS

const { HOST_SERVER_WS } = process.env;


export const loadUserData = async () => {

    const userStoraged = await AsyncStorage.getItem('uservai');

    userDataStoraged = JSON.parse(userStoraged);

};

export const AuthProvider = ({ children }) => {

    //============================================================================================================   
    // FUNCOES PARA O USUARIO    
    //===========================================================================================================


    useEffect(() => {
        loadUserData();

        setTimeout(() => {
            loadUserData();
            getAllPets();
        }, 100);
    }, []);

    const [user, setUser] = useState({});

    const Navigation = useNavigation();

    // FAZ O LOGIN DO USUARIO
    const signIn = async (email, senha) => {

        const userData = {
            email,
            senha
        };

        try {

            const response = await axios.post(`${HOST_SERVER_WS || 'http://192.168.0.7:3000'}/user/login`, userData);

            if (response.data.user) {

                //setUser(response.data.user);

                const data = response.data.user;

                await AsyncStorage.setItem('uservai', JSON.stringify(data));

                const userStoraged = await AsyncStorage.getItem('uservai');

                userDataStoraged = JSON.parse(userStoraged);

                loadUserData();
                setTimeout(() => {
                    loadUserData();
                }, 200);

                Navigation.navigate('Home');

            } else {
                Alert.alert(response.data.message);
            };
        } catch (err) {
            if (err.message == 'Network Error') {
                Alert.alert('Opss, sem conexão.');
            } else {
                Alert.alert(err.message);
            }
        }
    };


    // FAZ O CADASTRO DO USUARIO
    const signUp = async (data) => {

        try {

            const response = await axios.post(`${HOST_SERVER_WS || 'http://192.168.0.7:3000'}/user/signup`, data);

            if (response.data.user) {

                //console.log('Dados do servidor: ', response.data.user);

                setUser(response.data.user);

                userDataStoraged = response.data.user;

                await AsyncStorage.setItem('uservai', JSON.stringify(response.data.user));

                const data = await AsyncStorage.getItem('vaiuser');

                userDataStoraged = JSON.parse(data);

                Navigation.navigate('Login');

                Alert.alert('Conta criada! 😃');
            } else {
                Alert.alert(response.data.message);
            };



        } catch (err) {
            if (err.message == 'Network Error') {
                Alert.alert('Opss, sem conexão.');
            } else {
                Alert.alert(err.message);
            }
        }

    };


    //ADICIONA UM PET FAVORITO PARA USUARIO
    const addNewFavoritePet = async (pet) => {

        const idUser = userDataStoraged._id;

        try {

            const response = await axios.get(`${HOST_SERVER_WS || 'http://192.168.0.7:3000'}/user/${idUser}`);

            let oldPets = response.data.user.petFavorites; //array

            if (oldPets != undefined) {

                let teste = [];

                let petsRefreshed = [...oldPets, pet];

                const petExist = oldPets.some(item => item._id == pet._id);

                if (petExist) {
                    return console.log('Este pet já está favoritado.');
                };

                await axios.put(`${HOST_SERVER_WS || 'http://192.168.0.7:3000'}/user/refresh/${idUser}`, { petFavorites: petsRefreshed });
            } else {
                let petsRefreshed = [pet];
                await axios.put(`${HOST_SERVER_WS || 'http://192.168.0.7:3000'}/user/refresh/${idUser}`, { petFavorites: petsRefreshed });
            }

        } catch (err) {
            if (err.message == 'Network Error') {
                Alert.alert('Opss, sem conexão.');
            } else {
                Alert.alert(err.message);
            }
        }
    };


    // DELETA O PET FAVORITO
    const deletePetFavorite = async (pet) => {

        // console.log('PET A SER DELETADO: ', pet);

        const response = await axios.get(`${HOST_SERVER_WS || 'http://192.168.0.7:3000'}/user/${userDataStoraged._id}`);

        let oldPets = response.data.user.petFavorites;

        const pets = oldPets.filter(item => {
            return item._id !== pet._id;
        });

        await axios.put(`${HOST_SERVER_WS || 'http://192.168.0.7:3000'}/user/refresh/${userDataStoraged._id}`, { petFavorites: pets });

    };


    //CARREGA OS PETS FAVORITOS
    const getPetsFavorites = async () => {
        const response = await axios.get(`${HOST_SERVER_WS || 'http://192.168.0.7:3000'}/user/${userDataStoraged._id}`);

        let oldPets = response.data.user.petFavorites;

        return oldPets;
    };


    //CARREGA OS PETS CRIADOS PELO USUARIO
    const getPetsCreated = async () => {

        const idUser = userDataStoraged._id;

        const response = await axios.get(`${HOST_SERVER_WS || 'http://192.168.0.7:3000'}/user/${idUser}`);

        const petsCreated = response.data.user.petsCreated;

        return petsCreated;
    };

    //============================================================================================================   
    // FUNCOES PARA O PET    
    //===========================================================================================================



    // PEGANDO TODOS OS PETS DO BD
    const getAllPets = async () => {

        try {

            const response = await axios.get(`${HOST_SERVER_WS || 'http://192.168.0.7:3000'}/`);

            allPets = response.data.allPets;
        } catch (err) {
            if (err.message == 'Network Error') {
                Alert.alert('Opss, sem conexão.');
            } else {
                Alert.alert(err.message);
            }
        }
    };



    //  CRIANDO UM NOVO PET E COLOCANDO PARA O USUARIO
    const createNewPet = async (data) => {

        try {

            const response = await axios.post(`${HOST_SERVER_WS || 'http://192.168.0.7:3000'}/`, data);

            if (response.data) {
                Navigation.navigate('Home');
                Alert.alert('','Seu Pet foi para o centro de doações. Esperamos que encontre um lar! 🙏');

                const response = await axios.get(`${HOST_SERVER_WS || 'http://192.168.0.7:3000'}/user/${userDataStoraged._id}`);

                let petsOldCreated = response.data.user.petsCreated;

                // console.log(petsOldCreated);

                let petsCreatedRefreshed = [...petsOldCreated, data];


                await axios.put(`${HOST_SERVER_WS || 'http://192.168.0.7:3000'}/user/refresh/${userDataStoraged._id}`, { petsCreated: petsCreatedRefreshed });

                Navigation.navigate('Home');
            }

        } catch (err) {
            if (err.message == 'Network Error') {
                Alert.alert('Opss, sem conexão.');
            } else {
                Alert.alert(err.message);
            }
        }
    };

    //DELETA UM PET CRIADO PELO USUARIO
    const deletePetCreated = async (pet) => {

        const response = await axios.get(`${HOST_SERVER_WS || 'http://192.168.0.7:3000'}/user/${userDataStoraged._id}`);

        let petsOldCreated = response.data.user.petsCreated;

        const petsRefreshed = petsOldCreated.filter(item => item.nome != pet.nome);

        //console.log(petsRefreshed);

        await axios.put(`${HOST_SERVER_WS || 'http://192.168.0.7:3000'}/user/refresh/${userDataStoraged._id}`, { petsCreated: petsRefreshed });

        const allPets = await axios.get(`${HOST_SERVER_WS || 'http://192.168.0.7:3000'}/`);

        let pets = allPets.data.allPets;

        const result = pets.filter(item => item.idDono == pet.idDono);

        if (result[0]) {
            console.log(result[0]._id);

            await axios.delete(`${HOST_SERVER_WS || 'http://192.168.0.7:3000'}/${result[0]._id}`);

            Alert.alert('Pet excluído com sucesso!');
            Navigation.navigate('UserConfig');
        } else {
            return alert('Opps, não foi possível excluir seu Pet.');
        }
    };

    return (
        <AuthContext.Provider value={{ user, userDataStoraged, signIn, signUp, getAllPets, createNewPet, addNewFavoritePet, deletePetFavorite, getPetsFavorites, getPetsCreated, deletePetCreated }}>
            {children}
        </AuthContext.Provider>
    )
};
