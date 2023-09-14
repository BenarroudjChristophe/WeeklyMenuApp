import React from 'react'
import styled from 'styled-components'
import MenuDuJour from './MenuDuJour'
import Favoris from './Favoris'
import NextDays from '../DragNDrop/NextDays'
import NavBar from '../NavBar/NavBar'

const Home = () => {
    return (
        <>
         <Main >
    
            <Div>
              <NavBar />
              <MenuDuJour />
              <Favoris />
            </Div>
    
            <Div>
              <NextDays />
            </Div>
    
         </Main>
        </>
        
      )
    }
    
    const Main = styled.main`
      display: flex;
      justify-content: space-between;
      height: 100%;
    `
    
    const Div = styled.div`
      width: 100%;
      margin-right: 2%;
    `


export default Home