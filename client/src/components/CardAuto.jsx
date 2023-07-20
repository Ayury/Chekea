import React from 'react'
import { Link } from 'react-router-dom'

export const CardAuto = ({ id, marca, modelo, anio, transmision }) => {
  return (
        <Link to={`/auto/${id}`} className='cardAuto'>
          <h2>{marca}, {modelo}</h2>
          {/* Poner imagen */}
          <div>
            { anio && <p>Año: {anio}</p> }
            { transmision && <p>Transmisión: {transmision}</p> }
          </div>
        </Link>
  )
}
