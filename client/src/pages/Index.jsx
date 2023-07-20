import React from 'react'
import { Header } from '../components/Header'
import { AllAutos } from '../components/AllAutos'
import { Footer } from '../components/Footer'


export const Index = () => {
  return (
    <div>
        <Header />
        <div className='contenido'>
            <AllAutos />
        </div>
        <Footer />
    </div>
  )
}
