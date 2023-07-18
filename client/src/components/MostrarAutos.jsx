import React, { useEffect, useState } from 'react'
import { verTodosLosAutos } from '../api/autos'

export const MostrarAutos = () => {
  const [autos, setAutos] = useState()

  // useEffect(() => {
  //   async () => {
  //     const response = await verTodosLosAutos();
  //     setAutos(response);
  //   }
  // }, [])

  return (
    <div className='cardAutos'>
      {autos.map((auto) => {
        <div>
          <img src={"/carImage/"+auto.imagen} />
          <h2>{auto.marca}</h2>
          <p>{auto.anio}, {auto.color}</p>
        </div>
      })}
    </div>
  )
}
