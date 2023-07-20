import React from 'react'

export const Taller = ( { idTaller, nombre, telefono, email, ubicacion, img } ) => {
  return (
    <div id={idTaller}>
        <h1>Talleres Disponibles</h1>
        <section>
            <h3>{nombre}</h3>
            {/* <img src={img} alt={`Imagen del auto ${nombre}`}/> */}
            <p>{telefono}, {email}, {ubicacion}</p>
        </section>
    </div>
  )
}
