import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { verAuto, imgAuto } from "../api/autos";
import { Link } from "react-router-dom";

// Componentes
import { Header } from "./Header";
import { Footer } from "./Footer";
import ferrariPrueba from '../../public/carImage/ferrariPrueba.jpeg'


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

  const comprarAuto = async () => {
    const response = await fetch("http://localhost:3001/crear-orden", {
      method: "POST",
      // body: JSON.stringify({ monto: 10.00 })
    });

    const data = await response.json();
    console.log(data);

    window.location.href = data.links[1].href;
  };

  return (
    <>
      <Header />
      <div className="contenidoTopBottom contenido espacioSection">
        <section className="detallesAuto">
          <h1>Detalles del Auto</h1>
          <hr className="hrTitulo"/>
          <div>
            <section>
              <h3>Imágenes</h3>
              <div className="divVerImgAuto">
                { autoImg ? (
                    autoImg.map(img => (
                      <img key={img.idImagen} src={`carImagen/${imagen}`} className="verImgAuto"/>
                  ))
                  ) : (
                    <img src={ferrariPrueba} className="verImgAuto"/>
                  ) }
              </div>
            </section>
            <div>
              <section className="detalleAutoInfo">
                <hr className="hrTitulo"/>
                <h3>Información</h3>
                <section>
                  <div>
                    <p>Marca: <strong>{auto.marca}</strong></p>
                    <p>Modelo: <strong>{auto.modelo}</strong></p>
                  </div>
                  <div>
                    <p>Placa: <strong>{auto.placa}</strong></p>
                    <p>Año: <strong>{auto.anio}</strong></p>
                  </div>
                  <div>
                    <p>Kilometraje: <strong>{auto.kilometraje}</strong></p>
                    <p>Transmisión: <strong>{auto.transmision}</strong></p>
                  </div>
                </section>
              </section>
            </div>
          </div>
          <div>
            <section className="detalleAutoInfo">
              <hr className="hrTitulo"/>
              <h3>Datos del Propietario</h3>
              <section>
                <div>
                  <p>Nombre: <strong>{auto.nombre} {auto.apellido}</strong></p>
                  <p>Teléfono: <strong>{auto.telefono}</strong></p>
                </div>
                <div>
                  <p className="pDetalle">Detalles: <strong>{auto.detalles}</strong></p>
                </div>
              </section>
            </section>
          </div>
          <section className="seccionBtn">
            <button onClick={comprarAuto}>
              Comprar Documento de Inspección
            </button>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
};
