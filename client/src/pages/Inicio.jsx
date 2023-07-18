import React, { useEffect } from 'react'
import { Header } from '../components/Header';
import { MostrarAutos } from '../components/MostrarAutos';

export const Inicio = () => {

  return (
    <div>
        <Header />
        <h1>Ya iniciamos seccion</h1>
        <h3>Datos del Usuario Logeado:</h3>
        <p>{usuarioLogeado.id_usuario} {usuarioLogeado.nombre} {usuarioLogeado.apellido} {usuarioLogeado.email} {usuarioLogeado.telefono}</p>
        <MostrarAutos />
    </div>
    
  )
}
