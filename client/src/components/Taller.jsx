import React from 'react'
import tallerFoton from '../../public/tallerImage/tallerFoton.png'

export const Taller = ( { idTaller, nombre, telefono, email, ubicacion, img } ) => {

  return (
      <section id={idTaller} className='cardTaller'>
          <h2>{nombre}</h2>
          <img src={ img ? `tallerImage/${img}` : tallerFoton } alt={`Imagen del auto ${nombre}`}/>
          <div>
            { telefono && <p>Teléfono: {telefono}</p> }
            { email && <p>Correo: {email}</p> }
            { ubicacion && <p>Ubicacion: {ubicacion}</p> }
          </div>
      </section>
  )
}
