import React from 'react'
import { BtnAgendar } from './BtnAgendar'
import { useChekea } from '../context/ChekeaContext'

export const Footer = () => {

  const { usuarioLogeado } = useChekea();

  return (
    <footer>
      Información del Footer
      {usuarioLogeado ? "Si" : "Nox"}
      <BtnAgendar />
    </footer>
  )
}
