import React from 'react';

import {
  Container,
  Title,
  FormPet
} from './styles';

export const FormCreatePet = ({ title, size, onchangetext }) => {
  return (
    <Container>
      <Title>{title}</Title>

      <FormPet autoCorrect={false} onChangeText={onchangetext} style={{ width: `${size}%` }} />
    </Container>
  );
}