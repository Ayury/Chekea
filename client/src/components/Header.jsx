import React from 'react'
import { useChekea } from '../context/ChekeaContext';
import logo from '../assets/logo.png';


export const Header = () => {

    const { deslogear } = useChekea();

    const CerrarSesion = () => {
        deslogear();
    }

  return (
    <header className="header">
    <div className=" logo"><img src={logo} alt=""/></div>
    <div className=" nombreEmpresa degradado-verde"><h1 className="nombre-logo">Chekea</h1><p className="slogan">Nunca Compres a ciegas, chekea</p></div>
    <nav className="navPrincipal">
        <a href="#">Inicio</a>
        <a href="#">Autos</a>
        <a href="#">Venta</a>
        <a href="#">Taller</a>
       
      </nav>
      <div className="social-icons">
        Redes Sociales
        <button onClick={CerrarSesion}>Cerrar Sesion</button> 
      </div>
   {/*   //<nav className="nav">
        <a href="#">Iniciar Sesion</a>
         
      </nav>//
     */}
    
  </header>


  )
}
