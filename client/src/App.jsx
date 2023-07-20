import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ChekeaContextProvider } from './context/ChekeaContext'
// Index principal
import { Index } from './pages/Index'
import { Login } from './components/Login'
import { Registrar } from './components/Registrar'
import { DetallesAuto } from './components/DetallesAuto'
 
export const App = () => {
  return (
    <div>
      <ChekeaContextProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auto/:id" element={<DetallesAuto />} />


          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<Registrar />} />
        </Routes>
      </ChekeaContextProvider>
    </div>
  )
}
