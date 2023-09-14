import React, { useState } from 'react'

import styled from 'styled-components';


const NextDays = () => {
    //state
 



    //comportement

    //render
  return (
    <Div>
    <H1>NextDays</H1>
    <Main>

        <Row>
            <Day>Lundi</Day> 
            <LinkDiv></LinkDiv>
            <LinkDiv>lien</LinkDiv>
        </Row>
          
    </Main>
    <Citation>“One cannot think well, love well, sleep well, if one has not dined well.”</Citation> 
    </Div>
  )
}

const Div = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;    
    height: 99%;
    margin-top: 2%;
`;
const H1 = styled.h1`
  color: #000;
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;
const Main = styled.main`
  display: flex;
  flex-direction: column; 
  height: 100%;
`
const Day = styled.p`
    text-align: center;
    width: 50%;
    margin: 1px ;   
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`
const LinkDiv = styled.div`
    display: flex;
    flex-direction: column;    
    text-align: center;
    width: 30%;
    margin: 1px ;   
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
`;
const Citation = styled.h3`
 text-align: center;
`;

export default NextDays