import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { autosPropietario, imgAutosPropietario, autosPropietarioConCita } from "../api/autos";
import { Link, useNavigate } from "react-router-dom";
import ferrariPrueba from "../../public/carImage/ferrariPrueba.jpeg";

export const AgendarCita = () => {
  const [autos, setAutos] = useState([]);
  const [autosCita, setAutosCita] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarAutos = async () => {
      try {
        const response = await autosPropietario(
          localStorage.getItem("usuarioLogeado")
        );
        setAutos(response);
      } catch (error) {
        navigate("/");
      }

      try {
        const response = await autosPropietarioConCita(
          localStorage.getItem("usuarioLogeado")
        );
        setAutosCita(response);
      } catch (error) {
        navigate("/");
      }
    };

    cargarAutos();
  }, []);

  return (
    <>
      <Header />
      <div className="contenido autosRegistrados contenidoTopBottom">
        <h1>Listado de Autos Registrados no Inspeccionados</h1>
        <div className="columnas3">
          {autos.map((auto) => (
            <div key={auto.idAuto}>
              <section className="autoInfo cardTaller">
                <img src={auto.img ? auto.img : ferrariPrueba} />
                <h1>
                  {auto.marca}, {auto.modelo}
                </h1><hr className="hrTitulo"/>
                <div>
                  { auto.placa ? <p>Placa: {auto.placa}</p> : <p>&nbsp;</p> }
                  { auto.kilometraje ? <p>Kilometraje: {auto.kilometraje}</p> : <p>&nbsp;</p>}
                  { auto.transmision ? <p>Transmisión: {auto.transmision}</p> : <p>&nbsp;</p>}
                </div>
                <section>
                  <Link to={`/agendar/${auto.idAuto}`}>Agendar</Link>
                </section>
              </section>
            </div>
          ))}
        </div>
      </div><hr style={{width: '80%'}} />
      <div className="contenido autosRegistrados" style={{paddingBottom: '2%'}}>
        <h1>Listado de Autos Registrados con Cita Agendada</h1>
        <div className="columnas3">
          {autosCita.map((auto) => (
            <div key={auto.idAuto}>
              <section className="autoInfo cardTaller">
                <img src={auto.img ? auto.img : ferrariPrueba} />
                <h1>
                  {auto.marca}, {auto.modelo}
                </h1><hr className="hrTitulo"/>
                <div>
                  { auto.placa ? <p>Placa: {auto.placa}</p> : <p>&nbsp;</p> }
                  { auto.kilometraje ? <p>Kilometraje: {auto.kilometraje}</p> : <p>&nbsp;</p>}
                  { auto.transmision ? <p>Transmisión: {auto.transmision}</p> : <p>&nbsp;</p>}
                </div>
                <section className={`estadoInspeccion ${ auto.catalogo == 0 ? "noInspeccion" : "siInspeccion"}`}>
                  <h3>Estado: {auto.catalogo == 0 ? "En proceso de Inspeccion⌚" : "En el catálogo de Venta💵"}</h3>
                </section>
              </section>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
