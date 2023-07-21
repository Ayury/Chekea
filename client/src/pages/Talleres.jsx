import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Taller } from '../components/Taller'
import { allTalleres } from '../api/taller'


export const Talleres = () => {
    const [talleres, setTalleres] = useState([]);

    useEffect(() => {
        const cargarTalleres = async () => {
            const response = await allTalleres();
            setTalleres(response);
        }

        cargarTalleres();
    }, [])
    

  return (
    <div>
        <Header />
        <div className='contenido columnas3 mostrarTalleres'>
            {
                talleres.map((taller, index) => (
                    <div key={index}>
                        <Taller idTaller={taller.idTaller} nombre={taller.nombre} telefono={taller.telefono} email={taller.email} ubicacion={taller.ubicacion} img={taller.img}/>
                    </div>
                ))
            }
        </div>
        <Footer />
    </div>
  )
}