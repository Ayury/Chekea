import React from 'react'
import { BtnAgendar } from './BtnAgendar'

export const Footer = () => {

  return (
    <footer class="pie-pagina">
        <div class="grupo-1">
            <div class="box">
                <figure>
                    <a href="#">
                        <img src="\src\assets\logo.png" alt="Logo de chekea" width="10%" height="10%"></img>
                    </a>
                </figure>
            </div>
            <div class="box">
                <h2>Contáctanos</h2>
                <p>Para soporte:</p>
                <p>Correo electrónico: soporte@chekea.com</p>
                <p>Central telefónica: 399-9999</p>
                <p>Horario de atención en línea: LUN - VIE 8AM a 5PM</p>
            </div>
            <div class="box">
                <h2>SIGUENOS</h2>
                <div class="red-social">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-instagram"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-youtube"></a>
                </div>
            </div>
        </div>
        <div class="grupo-2">
            <small>&copy; 2023 <b>Chekea</b> - Todos los Derechos Reservados.</small>
        </div>
    </footer>

    
  )
}
