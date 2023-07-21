import React from 'react'
import { Link } from 'react-router-dom'
import ferrariPrueba from '../../public/carImage/ferrariPrueba.jpeg'

export const CardCita = ({ id, placa, marca, modelo, fecha, img, taller }) => {

  return (
        <Link to={`/reporte/${id}`} className='cardAuto'>
          <img src={img ? img : ferrariPrueba} />
          <h2>{marca}, {modelo}</h2><hr className="hrTitulo"/>
          <section>
            { placa && <p>Placa: {placa}</p> }
            { fecha && <p>Fecha de Inspeccion: {fecha}</p> }
            { taller && <p>Taller de Inspeccion: {taller}</p> }
          </section>
        </Link>
  )
}