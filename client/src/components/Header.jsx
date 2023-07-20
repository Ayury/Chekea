import React from 'react'
import { useChekea } from '../context/ChekeaContext';

export const Header = () => {

    const { deslogear } = useChekea();

    const CerrarSesion = () => {
        deslogear();
    }

  return (
    <header className="header">
    {/* <div className=" logo">Logo<img src="{logo-empresa.png}" alt=""/></div> */}
    <div className=" nombreEmpresa degradado-verde"><h1 className="nombre-logo">Chekea</h1><p className="slogan">Nunca Compres a ciegas, chekea</p></div>
    <nav className="nav">
        <a href="#">Inicio</a>
        <a href="#">Autos</a>
        <a href="#">Venta</a>
        <a href="#">Taller</a>
       
      </nav>
      <div className="social-icons">
        Redes Sociales
      </div>
      <nav className="nav">
        <a href="#">Iniciar Sesion</a>
        <button onClick={CerrarSesion}>Cerrar Sesion</button>  
      </nav>
    
    
  </header>


  )
}
