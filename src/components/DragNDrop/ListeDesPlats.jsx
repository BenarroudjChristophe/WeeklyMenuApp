import React from 'react'
import styled from 'styled-components'

const ListeDesPlats = ({id, name}) => {
  console.log(name);
  return (
    <Main>

    <DivPlat >{name}</DivPlat>
    </Main>
  )
}

const Main = styled.main`
display: flex;
/* height: auto; */
border: 1px solid black;
margin-top: 10%;
width: 50%;

`
const DivPlat = styled.div`
display: flex;
flex-direction: column;    
text-align: center;
height: 10%;
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
export default ListeDesPlats