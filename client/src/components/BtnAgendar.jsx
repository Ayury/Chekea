import React from 'react'
import { Link } from 'react-router-dom'

export const BtnAgendar = () => {

  return (
    <Link to={ localStorage.getItem('usuarioLogeado') ? "/agendar" : "/login" } className='btnAgendar'>Agendar Cita</Link>
  )
}
