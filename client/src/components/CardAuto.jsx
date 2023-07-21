import React from 'react'
import { Link } from 'react-router-dom'
import ferrariPrueba from '../../public/carImage/ferrariPrueba.jpeg'

export const CardAuto = ({ id, marca, modelo, anio, transmision, img }) => {

  return (
        <Link to={`/auto/${id}`} className='cardAuto'>
          <img src={img ? img : ferrariPrueba} />
          <h2>{marca}, {modelo}</h2><hr className="hrTitulo"/>
          <section>
            { anio && <p>Año: {anio}</p> }
            { transmision && <p>Transmisión: {transmision}</p> }
          </section>
        </Link>
  )
}
