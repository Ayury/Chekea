import React from 'react'
import { useChekea } from '../context/ChekeaContext';
import logo from '../assets/logo.png';


export const Header = () => {

    const { deslogear, usuarioLogeado } = useChekea();

    const CerrarSesion = () => {
        deslogear();
    }

  return (
    <header className="header">
    <div className=" logo"><img src={logo} alt=""/></div>
    <div className=" nombreEmpresa "><h2 className="nombre-logo">Chekea</h2><p className="slogan">Nunca Compres a ciegas, chekea</p></div>
    <nav className="navPrincipal">
        <a href="#">Inicio</a>
        <a href="#">Autos</a>
        <a href="#">Vender</a>
        <a href="#">Talleres</a>
       
      </nav>
      <div className="social-icons">
        Redes Sociales
         
      </div>
      <nav className="sesion">
        {
          localStorage.getItem('usuarioLogeado') ? (
            <button onClick={CerrarSesion}>Cerrar Sesion</button>  
          ) : (  
            <a href="/login">Iniciar Sesion</a>
          )
        }
      </nav>
    
   {/*   //<nav className="nav">
        <a href="#">Iniciar Sesion</a>
         
      </nav>//
     */}
    
  </header>


  )
}
