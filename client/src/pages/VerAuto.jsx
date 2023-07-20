import React from 'react'
import { Header } from '../components/Header'
import { DetallesAuto } from '../components/DetallesAuto'
import { Footer } from '../components/Footer'


export const verAuto = () => {
  return (
    <div>
        <Header />
        <div className='contenido'>
            <DetallesAuto />
        </div>
        <Footer />
    </div>
  )
}