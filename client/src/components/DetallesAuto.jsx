import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { verAuto, imgAuto } from "../api/autos";
import { Link } from "react-router-dom";

// Componentes
import { Header } from "./Header";
import { Footer } from "./Footer";

export const DetallesAuto = () => {
  const params = useParams();
  const [auto, setAuto] = useState({});
  const [autoImg, setAutoImg] = useState();

  useEffect(() => {
    const cargarAuto = async () => {
      // Cargar datos del Auto
      const response = await verAuto(params.id);
      setAuto(response[0]);

      // Cargar imagenes del Auto
      // const response2 = await imgAuto(params.id);
      // console.log(response2);
      // setAutoImg(response);
    };

    cargarAuto();
  }, []);
  

  return (
    <>
      <Header />
      <div>
        <h1>Detalles del Auto</h1>
        <section>
          <div>
            <section>
              <h3>Imágenes</h3>
              <div>Cargar todas la imagenes</div>
              {
                // autoImg.map(img => (
                //     <img key={img.idImagen} src={`carImagen/${imagen}`} />
                // ))
              }
            </section>
            <section>
              <h3>Información</h3>
              <div>
                <p>Marca: {auto.marca}</p>
                <p>Modelo: {auto.modelo}</p>
              </div>
              <div>
                <p>Placa: {auto.placa}</p>
                <p>Año: {auto.anio}</p>
              </div>
              <div>
                <p>Kilometraje: {auto.kilometraje}</p>
                <p>Transmisión: {auto.transmision}</p>
              </div>
            </section>
          </div>
          <div>
            <h4>Datos del Propietario</h4>
            <div>
              <p>Nombre: {auto.nombre}</p>
              <p>Apellido: {auto.apellido}</p>
              <p>Teléfono: {auto.telefono}</p>
            </div>
            <div>
              <p>Detalles: {auto.detalles}</p>
            </div>
          </div>
        </section>
        <section>
          <Link to="/" >Comprar</Link>
        </section>
      </div>
      <Footer />
    </>
  );
};
