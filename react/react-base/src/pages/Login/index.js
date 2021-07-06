import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleCLick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <Container>
      <Title>
        Login
        <small>Bem vindo</small>
      </Title>
      <Paragrafo>Lorem Ipsum</Paragrafo>
      <button type="button" onClick={handleCLick}>
        Enviar
      </button>
    </Container>
  );
}
