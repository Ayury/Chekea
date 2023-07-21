import React from 'react'
import { Link } from 'react-router-dom'
import instagram from "../../public/redes/instagram.webp"
import youtube from "../../public/redes/youtube.webp"
import facebook from "../../public/redes/facebook.webp"
import twitter from "../../public/redes/twitter.webp"

export const Footer = () => {

  return (
    <footer className="pie-pagina">
        <div className="grupo-1">
            <div className='infoFooter'>
                <div className="box1">
                    <a href="/">
                        <img src="\src\assets\logo.png" alt="Logo de chekea" width="10%" height="10%"></img>
                        <h2 className="nombre-logo">Chekea</h2>
                    </a>
                </div>
                <div className="box2">
                    <h2>Contáctanos</h2>
                    <p>Para soporte:</p>
                    <p>Correo electrónico: soporte@chekea.com</p>
                    <p>Central telefónica: 399-9999</p>
                    <p>Horario de atención en línea: LUN - VIE 8AM a 5PM</p>
                </div>
            </div>
            <div className="box3">
                <h2>Síguenos</h2>
                <div className="red-social">
                    <section>
                        <Link to="/" ><img src={instagram} /></Link>
                        <Link to="/" ><img src={facebook} /></Link>
                        <Link to="/" ><img src={youtube} /></Link>
                        <Link to="/" ><img src={twitter} /></Link>
                    </section>
                </div>
            </div>
        </div>
        <div className="grupo-2">
            <small>&copy; 2023 <b>Chekea</b> - Todos los Derechos Reservados.</small>
        </div>
    </footer>

    
  )
}
