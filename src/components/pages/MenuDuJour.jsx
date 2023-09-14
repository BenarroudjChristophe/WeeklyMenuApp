import React from 'react';
import styled from 'styled-components';

const MenuDuJour = () => {

    //state

    //comportement

    //render
  return (
    <Div>
      <H1>Today's menu</H1>
      <InsideDiv>
        <Row>
          <Column>
            <Midi>Midi</Midi>
            <Photo src="https://picsum.photos/100/100" alt="plat" />
          </Column>
          <Column>
            <Soir>Soir</Soir>
            <Photo src="https://picsum.photos/100/100" alt="plat" />
          </Column>
        </Row>
      </InsideDiv>
    </Div>
  );
};

const Div = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;    
    height: auto;
    margin-top: 3%;
`;

const InsideDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%; 
  text-align: center;
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

const Midi = styled.div`
  text-align: center;
`;

const Soir = styled.div`
  text-align: center;
`;

const Photo = styled.img`
  width: 100px;
  height: 100px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  object-fit: cover;
  object-position: center;
  border: 2px solid #000;
  background-color: #fff;
  padding: 5px;
  margin-top: 20px;
  margin-left: auto;
    margin-right: auto;
`;

export default MenuDuJour;
