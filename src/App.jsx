import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContatoPage from './pages/ContatoPage'
import Menu from './pages/Menu'
import ListaTarefas from './components/ListaTarefas'

function App() {
  

  return (
    <div>
      
      <Menu/>

       <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/contato" element={<ContatoPage />} />
    </Routes>
    <ListaTarefas/>
    </div>
  )
}

export default App
