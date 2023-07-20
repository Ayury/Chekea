import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { autosPropietario, imgAutosPropietario } from "../api/autos";
import { Link, useNavigate } from "react-router-dom";

export const AgendarCita = () => {
  const [autos, setAutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarAutos = async () => {
      try {
        const response = await autosPropietario(localStorage.getItem('usuarioLogeado'));
        setAutos(response);
      } catch (error) {
        navigate("/")
      }
    };

    cargarAutos();
  }, []);

  return (
    <>
      <Header />
      <div>
        <h1>Seccion para agendar cita, cargar los autos</h1>
        <div>
          {autos.map((auto) => (
            <div key={auto.idAuto}>
              <section className="autoInfo">
                <h1>
                  {auto.marca}, {auto.modelo}
                </h1>
                <div className="imgAutos"></div>
                <h4>
                  {auto.placa}, {auto.kilometraje}, {auto.transmision}
                </h4>
              </section>
              <section>
                <Link to={`/agendar/${auto.idAuto}`} >Agendar</Link>
              </section>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
