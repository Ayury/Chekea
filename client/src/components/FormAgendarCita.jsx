import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { verAuto, imgAuto } from "../api/autos";

// Componentes
import { Header } from "./Header";
import { Footer } from "./Footer";
import { allTalleres } from "../api/taller";
import { useChekea } from "../context/ChekeaContext";
import { agendarCita } from "../api/cita";
import ferrariPrueba from "../../public/carImage/ferrariPrueba.jpeg";

export const FormAgendarCita = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [auto, setAuto] = useState({});
  const [autoImg, setAutoImg] = useState([]);
  const [talleres, setTalleres] = useState([]);
  const [cita, setCita] = useState({});

  useEffect(() => {
    const cargarAuto = async () => {
      try {
        setCita({
          idUsuario: localStorage.getItem("usuarioLogeado"),
          idAuto: params.id,
          idTaller: 1,
          fecha: "",
        });
      } catch (error) {
        navigate("/");
      }

      // Cargar datos del Auto
      const response = await verAuto(params.id);
      setAuto(response[0]);

      // Cargar imagenes del Auto
      // const response2 = await imgAuto(params.id);
      // console.log(response2);
      // setAutoImg(response);
    };

    const cargarTalleres = async () => {
      const response = await allTalleres();
      setTalleres(response);
    };

    cargarAuto();
    cargarTalleres();
  }, []);

  return (
    <>
      <Header />
      <div className="contenidoTopBottom  contenido espacioSection">
        <section className="detallesAuto">
          <h1>Agendar Cita del Auto</h1>
          <hr />
          <div>
            <section>
              <h3>Imágenes</h3>
              <div className="divVerImgAuto">
                {autoImg.length > 0 ? (
                  autoImg.map((img) => (
                    <img
                      key={img.idImagen}
                      src={`carImagen/${imagen}`}
                      className="verImgAuto"
                    />
                  ))
                ) : (
                  <img src={ferrariPrueba} className="verImgAuto" />
                )}
              </div>
            </section>
            <div>
              <section className="detalleAutoInfo">
                <hr />
                <h3>Información</h3>
                <section>
                  <div>
                    <p>
                      Marca: <strong>{auto.marca}</strong>
                    </p>
                    <p>
                      Modelo: <strong>{auto.modelo}</strong>
                    </p>
                  </div>
                  <div>
                    <p>
                      Placa: <strong>{auto.placa}</strong>
                    </p>
                    <p>
                      Año: <strong>{auto.anio}</strong>
                    </p>
                  </div>
                  <div>
                    <p>
                      Kilometraje: <strong>{auto.kilometraje}</strong>
                    </p>
                    <p>
                      Transmisión: <strong>{auto.transmision}</strong>
                    </p>
                  </div>
                </section>
              </section>
            </div>
          </div>
          <div>
            <section className="detalleAutoInfo">
              <hr />
              <h3>Datos del Propietario</h3>
              <section>
                <div>
                  <p>
                    Nombre:{" "}
                    <strong>
                      {auto.nombre} {auto.apellido}
                    </strong>
                  </p>
                  <p>
                    Teléfono: <strong>{auto.telefono}</strong>
                  </p>
                </div>
                <div>
                  <p className="pDetalle">
                    Detalles: <strong>{auto.detalles}</strong>
                  </p>
                </div>
              </section>
            </section>
          </div>
          <hr />
          <h2 style={{ textAlign: "center", margin: "2% 0" }}>
            Datos de la Cita a Agendar
          </h2>
          <Formik
            initialValues={cita}
            enableReinitialize={true}
            onSubmit={async (values, actions) => {
              try {
                await agendarCita(values);
                const response = await fetch("http://localhost:3001/crear-orden", {
                  method: "POST",
                  // body: JSON.stringify({ monto: 10.00 })
                });

                const data = await response.json();
                console.log(data);

                window.location.href = data.links[1].href;
              } catch (error) {
                console.log(error);
              }

              actions.resetForm();
            }}
          >
            {({ handleChange, handleSubmit, values, isSubmitting }) => (
              <Form
                action="/"
                method="get"
                onSubmit={handleSubmit}
                className="formAgendar"
              >
                <div>
                  <label htmlFor="taller">Seleccione el Taller:</label>
                  <select
                    type="text"
                    id="idTaller"
                    name="idTaller"
                    value={values.idTaller}
                    onChange={handleChange}
                    required={true}
                  >
                    {talleres.map((taller) => {
                      return (
                        <option value={taller.idTaller} key={taller.idTaller}>
                          {taller.nombre}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label htmlFor="fecha">Fecha:</label>
                  <input
                    type="date"
                    id="fecha"
                    name="fecha"
                    placeholder="*******"
                    value={values.fecha}
                    onChange={handleChange}
                    required={true}
                  />
                </div>
                <section className="seccionBtn">
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Agendando..." : "Agendar"}
                  </button>
                </section>
              </Form>
            )}
          </Formik>
        </section>
      </div>
      <Footer />
    </>
  );
};
