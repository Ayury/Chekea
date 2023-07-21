import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ChekeaContextProvider } from './context/ChekeaContext'
// Index principal
import { Index } from './pages/Index'
import { Login } from './components/Login'
import { Registrar } from './components/Registrar'

import { DetallesAuto } from './components/DetallesAuto'
import { AgendarCita } from './components/AgendarCita'
import { FormAgendarCita } from './components/FormAgendarCita'
import { Talleres } from './pages/Talleres'
import { RegistrarAuto } from './components/RegistrarAuto'
import { Reportes } from './components/Reportes'
import { FormReporte } from './components/FormReporte'
 
export const App = () => {
  return (
    <div>
      <ChekeaContextProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auto/:id" element={<DetallesAuto />} />
          <Route path="/agendar" element={<AgendarCita />} />
          <Route path="/agendar/:id" element={<FormAgendarCita />} />
          <Route path="/vender" element={<RegistrarAuto />} />
          <Route path="/talleres" element={<Talleres />} />
          <Route path="/reporte" element={<Reportes />} />
          <Route path="/reporte/:id" element={<FormReporte />} />

          {/* Paypal */}
          <Route path="/capturar-orden" element={<Index />} />

          
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<Registrar />} />
        </Routes>
      </ChekeaContextProvider>
    </div>
  )
}
