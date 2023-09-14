import React from 'react'
import styled from 'styled-components';

const Favoris = () => {

    //state

    //comportement

    //render
  return (
    <Div>
    <H1>Favoris</H1>
    <A href="#">Plat numéro 1</A>
    <A href="#">Plat numéro 1</A>
    <A href="#">Plat numéro 1</A>
    <A href="#">Plat numéro 1</A>
    </Div>

  )
}

const Div = styled.div`
border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: auto;
  margin-top: 3%;
`;

const H1 = styled.h1`
  color: #000;
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const A = styled.a`
    color: #000;
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0;
    padding: 2px;
    text-align: center;
    text-decoration: none;
`

export default Favoris