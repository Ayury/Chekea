import React, { useEffect, useState } from 'react'
import { verTodosLosAutos } from '../api/autos'
import { CardAuto } from './CardAuto'

export const AllAutos = () => {
  const [autos, setAutos] = useState([])

  useEffect(() => {
    const cargarAutos = async () => {
      const response = await verTodosLosAutos();
      setAutos(response);
    }

    cargarAutos();
  }, [])

  return (
    <div>
      <h1>Catálogo de Autos</h1>
      <div className='cardAutos'>{
        autos.map((auto) => (
          <div key={auto.idAuto}>
            <CardAuto id={auto.idAuto} marca={auto.marca} modelo={auto.modelo} anio={auto.anio} />
          </div>
        ) )}
      </div>
    </div>
  )
}
