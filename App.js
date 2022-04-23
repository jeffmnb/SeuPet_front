import React from 'react';

import { Routes } from './src/routes';

import { Pattaya_400Regular, useFonts } from '@expo-google-fonts/pattaya';

import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

import AppLoading from 'expo-app-loading';

export default function App() {

  const [fontsValid] = useFonts({
    Pattaya_400Regular,
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsValid) return AppLoading;

  return (
    <Routes />
  );
}