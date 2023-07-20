import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { autosPropietario, imgAutosPropietario } from "../api/autos";
import { allTalleres } from "../api/taller";
import { useChekea } from "../context/ChekeaContext";
import { Link } from "react-router-dom";

export const AgendarCita = () => {
  const { usuarioLogeado } = useChekea();
  const [autos, setAutos] = useState([]);


  useEffect(() => {
    const cargarAutos = async () => {
      const response = await autosPropietario(1);
      setAutos(response);
    };

    cargarAutos();
  }, []);

  const actualizarForm = (idAuto) => {
  };

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
