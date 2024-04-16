import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'
// import NavBar from './components/NavBar2'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <NavBar />
        <ItemListContainer mensaje={"Prueba mensaje"}/>
    </>
  )
}

export default App
