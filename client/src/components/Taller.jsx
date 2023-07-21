import React from 'react'
import tallerFoton from '../../public/tallerImage/tallerFoton.png'

export const Taller = ( { idTaller, nombre, telefono, email, ubicacion, img } ) => {

  return (
      <section id={idTaller} className='cardTaller'>
          <img src={ img ? `tallerImage/${img}` : tallerFoton } alt={`Imagen del auto ${nombre}`}/>
          <h2>{nombre}</h2>
          <div>
            { telefono && <p>Teléfono: {telefono}</p> }
            { email && <p>Correo: {email}</p> }
            { ubicacion && <p>Ubicacion: {ubicacion}</p> }
          </div>
      </section>
  )
}
