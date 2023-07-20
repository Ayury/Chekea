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
    <div className='contenido mostrarAutos'>
        {
          autos.map((auto) => (
            <div key={auto.idAuto}>
              <CardAuto id={auto.idAuto} marca={auto.marca} modelo={auto.modelo} anio={auto.anio} transmision={auto.transmision} />
            </div>
        )) 
        }
    </div>
  )
}
