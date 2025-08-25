import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link  } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContatoPage from './pages/ContatoPage'

function App() {
  

  return (
    <div>
      <nav>
      <Link to="/">Início</Link>  
      <hr/>
      <Link to="/contato">Contato</Link>
      </nav>
    <hr/>
    <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/contato" element={<ContatoPage />} />
    </Routes>
    </div>
  )
}

export default App
