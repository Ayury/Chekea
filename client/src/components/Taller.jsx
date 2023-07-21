import React from 'react'

export const Taller = ( { idTaller, nombre, telefono, email, ubicacion, img } ) => {

  return (
      <section id={idTaller} className='cardTaller'>
          <h2>{nombre}</h2>
          <img src={`tallerImage/${img}`} alt={`Imagen del auto ${nombre}`}/>
          <div>
            { telefono && <p>Teléfono: {telefono}</p> }
            { email && <p>Correo: {email}</p> }
            { ubicacion && <p>Ubicacion: {ubicacion}</p> }
          </div>
      </section>
  )
}
