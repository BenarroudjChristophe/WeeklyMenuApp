import { useState } from 'react'

import './App.css'

import styled from 'styled-components'
import Home from './components/pages/Home'
import WeekMenu from './components/pages/WeekMenu'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  const [count, setCount] = useState(0)

  return (
    <DndProvider backend={HTML5Backend }>

      {/* <Home />  */}
       <WeekMenu />
    </DndProvider>
      
  )
}



export default App
