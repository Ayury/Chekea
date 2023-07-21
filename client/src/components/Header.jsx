import React from "react";
import { useChekea } from "../context/ChekeaContext";
import logo from "../assets/logo.png";

export const Header = () => {
  const { deslogear, usuarioLogeado } = useChekea();

  const CerrarSesion = () => {
    deslogear();
  };

  return (
    <header className="header">
      <div className=" logo">
        <img src={logo} alt="" />
      </div>
      <div className=" nombreEmpresa ">
        <h2 className="nombre-logo">Chekea</h2>
        <p className="slogan">Nunca Compres a ciegas, chekea</p>
      </div>
      <nav className="navPrincipal">
        <a href="/">Inicio</a>
        <a href={ localStorage.getItem('usuarioLogeado') ? "/vender" : "/login" }>Vender Auto</a>
        <a href={ localStorage.getItem('usuarioLogeado') ? "/agendar" : "/login" }>Agendar Cita</a>
        <a href="/talleres">Talleres</a>
        {localStorage.getItem("usuarioLogeado") == 1 && (
          <a type="button" href="/reporte">Reportes</a>
        )}
        {localStorage.getItem("usuarioLogeado") ? (
          <a type="button" onClick={CerrarSesion} className="btnIniciarSesion">Cerrar Sesion</a>
        ) : (
          <a href="/login" className="btnIniciarSesion">Iniciar Sesion</a>
        )}
        
      </nav>
      {/* <nav className="sesion">
        {localStorage.getItem("usuarioLogeado") ? (
          <a type="button" onClick={CerrarSesion} className="btnIniciarSesion">Cerrar Sesion</a>
        ) : (
          <a href="/login" className="btnIniciarSesion">Iniciar Sesion</a>
        )}
      </nav> */}

      {/*   //<nav className="nav">
        <a href="#">Iniciar Sesion</a>
         
      </nav>//
     */}
    </header>
  );
};
