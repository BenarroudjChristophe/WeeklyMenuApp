import styled from 'styled-components'
import NavBar from '../NavBar/NavBar'
import NextDays from '../DragNDrop/NextDays'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DragDrop from '../DragNDrop/DragDrop'
const WeekMenu = () => {
  return (
    <>
    <NavBar />
    
    <Main>
    <DragDrop />
    <NextDays />
    </Main>
    
    </>
    
  )
}

const Main = styled.main`
display: flex;
justify-content: space-between;
height: 100%;
`

export default WeekMenu