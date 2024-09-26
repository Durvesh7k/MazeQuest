import React from 'react'
import MazeSolver from './components/MazeSolver'
import Header from './components/Header'
import { DataContextProvider } from './context/DataContextProvider'

const App = () => {
  return (
    <div>
      <DataContextProvider>
        <Header />
        <MazeSolver />
      </DataContextProvider>
    </div>
  )
}

export default App