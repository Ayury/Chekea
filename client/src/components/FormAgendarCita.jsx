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
          idUsuario: localStorage.getItem('usuarioLogeado'),
          idAuto: params.id,
          idTaller: "",
          fecha: "",
        })
      } catch (error) {
        navigate("/")
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
      </div>
      <div>
        <Formik
          initialValues={cita}
          enableReinitialize={true}
          onSubmit={async (values, actions) => {
            try {
              await agendarCita(values);
              navigate("/agendar");
            } catch (error) {
              // Mostrar mensaje de error
            }

            actions.resetForm();
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form action="/" method="get" onSubmit={handleSubmit}>
              <input
                style={{ display: "none" }}
                type="number"
                id="idUsuario"
                name="idUsuario"
                value={values.idUsuario}
                onChange={handleChange}
                required={true}
              />
              <input
                style={{ display: "none" }}
                type="number"
                id="idAuto"
                name="idAuto"
                value={values.idAuto}
                onChange={handleChange}
                required={true}
              />
              <label htmlFor="taller">
                Seleccione el Taller:
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
              </label>
              <label htmlFor="fecha">
                Fecha:
                <input
                  type="date"
                  id="fecha"
                  name="fecha"
                  placeholder="*******"
                  value={values.fecha}
                  onChange={handleChange}
                  required={true}
                />
              </label>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </>
  );
};
