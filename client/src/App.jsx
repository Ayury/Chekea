import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ChekeaContextProvider } from './context/ChekeaContext'
import { Autos } from './pages/Autos'
import { Index } from './components'
import { Registrar } from './components/Registrar'
import { Inicio } from './pages/Inicio'
 
export const App = () => {
  return (
    <div>
      <ChekeaContextProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/inicio" element={<Inicio />} />
        </Routes>
      </ChekeaContextProvider>
    </div>
  )
}
