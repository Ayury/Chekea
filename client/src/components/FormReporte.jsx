import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { verAuto, imgAuto } from "../api/autos";
import { guardarReporte } from "../api/cita";

// Componentes
import { Header } from "./Header";
import { Footer } from "./Footer";
import { allTalleres } from "../api/taller";
import { agendarCita, getAutoCita } from "../api/cita";
import ferrariPrueba from "../../public/carImage/ferrariPrueba.jpeg";

export const FormReporte = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [autoImg, setAutoImg] = useState([]);
  const [aprobar, setAprobar] = useState({
    idCita: params.id,
    condicion: "",
    fecha: "",
    vender: 0,
    idAuto: 1
  });
  const [citas, setCitas] = useState({
    marca: ""
  });

  useEffect(() => {
    const cargarCita = async () => {
      // Cargar datos de la Cita
      const response = await getAutoCita(params.id);
      console.log(response[0])
      setCitas(response[0]);

      try {
        setAprobar({
          idCita: params.id,
          condicion: "",
          fecha: "",
          vender: 0,
          idAuto: response[0].idAuto
        })
      } catch (error) {
        console.log(error);
      }

      // Cargar imagenes del Auto
      // const response2 = await imgAuto(params.id);
      // console.log(response2);
      // setAutoImg(response);
    };


    cargarCita();
  }, []);

  const cargarFecha = () => {
    try {
      const valor = <strong>{((citas.fecha).split("T"))[0]}</strong>
      return valor;
    } catch (error) {
      return null;
    }
  }

  return (
    <>
      <Header />
      <div className="contenidoTopBottom  contenido espacioSection">
        <section className="detallesAuto">
          <h1>Datos de la Cita del Auto</h1>
          <hr className="hrTitulo"/>
          <div>
            <section>
              <h3>Imagen</h3>
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
                <hr className="hrTitulo"/>
                <h3>Información</h3>
                <section>
                  <div>
                    <p>
                      Marca: <strong>{citas.marca}</strong>
                    </p>
                    <p>
                      Modelo: <strong>{citas.modelo}</strong>
                    </p>
                    <p>
                      Placa: <strong>{citas.placa}</strong>
                    </p>
                  </div>
                </section>
              </section>
            </div>
          </div>
          <div>
            <section className="detalleAutoInfo">
              <hr className="hrTitulo"/>
              <h3>Datos de la Inspección</h3>
              <section>
                <div>
                  <p>
                    Taller:{" "}
                    <strong>
                      {citas.nombre}
                    </strong>
                  </p>
                  {/* <p>
                    Teléfono: <strong>{citas.telefono}</strong>
                  </p>
                  <p>
                    Correo: <strong>{citas.email}</strong>
                  </p> */}
                </div>
                <div>
                  <p className="pDetalle">
                    Programada para: {cargarFecha()}
                  </p>
                </div>
              </section>
            </section>
          </div>
          <hr className="hrTitulo"/>
          <h2 style={{ textAlign: "center", margin: "2% 0" }}>
            Datos de la Inspección Realizada
          </h2>
          <Formik
            initialValues={aprobar}
            enableReinitialize={true}
            onSubmit={async (values, actions) => {
                await guardarReporte(values);
                navigate("/reporte");

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
                  <label htmlFor="condicion">Condicion:</label>
                  <textarea
                    type="text"
                    id="condicion"
                    name="condicion"
                    placeholder="Escriba una reseña"
                    value={values.condicion}
                    onChange={handleChange}
                    required={true}
                  />
                </div>
                <div>
                  <label htmlFor="fecha">Fecha de la Inspección:</label>
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
                <div>
                  <label htmlFor="vender">Aprobar (Montar en el Catálogo):</label>
                  <select
                    type="date"
                    id="vender"
                    name="vender"
                    placeholder=""
                    value={values.vender}
                    onChange={handleChange}
                    required={true}
                  >
                    <option value="2">No</option>
                    <option value="1">Si</option>
                  </select>
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
