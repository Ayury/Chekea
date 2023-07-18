import React from 'react'
import { useChekea } from '../context/ChekeaContext';

export const Header = () => {

    const { deslogear } = useChekea();

    const CerrarSesion = () => {
        deslogear();
    }

  return (
    <header>
        <h1>Chekea</h1>
        <div>
            <div>
                <p>Autos</p>
                <p>Talleres</p>
                <p>Otra cosa</p>
            </div>
            <button onClick={CerrarSesion}>Cerrar Sesion</button>  
        </div>
    </header>

  )
}
