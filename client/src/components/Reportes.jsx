import React, { useEffect, useState } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { CardCita } from './CardCita'
import { getAutosCita } from '../api/cita'
import { useNavigate } from 'react-router-dom'

export const Reportes = () => {
  const [citas, setCita] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarCitas = async () => {
      const response = await getAutosCita();
      response.length == 0 && navigate("/");
      setCita(response);
    }

    cargarCitas();
  }, [])


  return (
    <div>
        <Header />
        <div className='contenido contenidoTopBottom mostrarAutos'>
        {
          citas.map((cita) => (
            <div key={cita.idCita}>
              <CardCita id={cita.idCita} placa={cita.placa} marca={cita.marca} modelo={cita.modelo} fecha={cita.fecha} img={cita.img} taller={cita.nombre} />
            </div>
        )) 
        }
        </div>
        <Footer />
    </div>
  )
}
