import React from 'react'
import { Link } from 'react-router-dom'

export const CardAuto = ({ id, marca, modelo, anio }) => {
  return (
        <Link to={`/auto?id=${id}`} >
            <h1>{marca}, {modelo}</h1>
            {/* Poner imagen */}
            <p>Año: {anio}</p>
        </Link>
  )
}
