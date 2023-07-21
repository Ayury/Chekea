import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { autosPropietario, imgAutosPropietario } from "../api/autos";
import { Link, useNavigate } from "react-router-dom";
import ferrariPrueba from "../../public/carImage/ferrariPrueba.jpeg";

export const AgendarCita = () => {
  const [autos, setAutos] = useState([]);
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
    };

    cargarAutos();
  }, []);

  return (
    <>
      <Header />
      <div className="contenido autosRegistrados contenidoTopBottom">
        <h1>Listado de Autos Registrados</h1>
        <div className="columnas3">
          {autos.map((auto) => (
            <div key={auto.idAuto}>
              <section className="autoInfo cardTaller">
                <h1>
                  {auto.marca}, {auto.modelo}
                </h1>
                <img src={auto.img ? auto.img : ferrariPrueba} />
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
      </div>
      <Footer />
    </>
  );
};
