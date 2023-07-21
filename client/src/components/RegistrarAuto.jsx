import React from "react";
import { Formik, Form } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { registrarAuto } from "../api/autos";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const RegistrarAuto = () => {
  const navigate = useNavigate();

  const regAuto = {
    placa: "",
    marca: "",
    modelo: "",
    anio: "",
    kilometraje: "",
    transmision: "",
    id_propietario: localStorage.getItem("usuarioLogeado"),
    detalles: "",
    imagenes: "",
  };

  const tipoTransmision = [
    {
      tipo: "Manual",
    },
    {
      tipo: "Automático",
    },
  ];

  return (
    <>
      <Header />
      <div className="contenidoTopBottom contenido regAuto">
        <h1>Vender Auto</h1>
        <h2>Ingresa la información solicitada:</h2>
        <Formik
          initialValues={regAuto}
          enableReinitialize={true}
          onSubmit={async (values, actions) => {
            // Agarrar archivo y darle el tratamiento
            console.log((values.imagenes.split("\\"))[2]);

            // const response = await registrarAuto(values);
            try {
              if (response.insertId > 0) {
                navigate("/");
              }
            } catch (error) {
              console.log(error);
            }

            // actions.resetForm();
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form action="/" method="get" onSubmit={handleSubmit} className="formRegAuto">
              <section>
                <label htmlFor="placa">
                  Placa:
                  <input
                    type="text"
                    id="placa"
                    name="placa"
                    placeholder="ABCABC"
                    value={values.placa}
                    onChange={handleChange}
                    required={true}
                  />
                </label>
                <label htmlFor="marca">
                  Marca:
                  <input
                    type="text"
                    id="marca"
                    name="marca"
                    placeholder="Mitsubishi"
                    value={values.marca}
                    onChange={handleChange}
                    required={true}
                  />
                </label>
                <label htmlFor="modelo">
                  Modelo:
                  <input
                    type="text"
                    id="modelo"
                    name="modelo"
                    placeholder="Lancer"
                    value={values.modelo}
                    onChange={handleChange}
                    required={true}
                  />
                </label>
                <label htmlFor="anio">
                  Año:
                  <input
                    type="number"
                    id="anio"
                    name="anio"
                    placeholder="2000"
                    value={values.anio}
                    onChange={handleChange}
                    required={true}
                  />
                </label>
                <label htmlFor="kilometraje">
                  Kilometraje:
                  <input
                    type="number"
                    id="kilometraje"
                    name="kilometraje"
                    placeholder="50 (Kilómetros)"
                    value={values.kilometraje}
                    onChange={handleChange}
                    required={true}
                  />
                </label>
                <label htmlFor="transmision">
                  Transmision:
                  <select
                    type="text"
                    id="transmision"
                    name="transmision"
                    value={values.transmision}
                    onChange={handleChange}
                    required={true}
                  >
                    {tipoTransmision.map((tipo, index) => {
                      return (
                        <option key={index} value={tipo.tipo}>
                          {tipo.tipo}
                        </option>
                      );
                    })}
                  </select>
                </label>
              </section>
              <section>
                <label htmlFor="imagenes">
                  Imagenes:
                  <input
                  type="file"
                  id="imagenes archivoInput"
                  name="imagenes"
                  value={values.imagenes}
                  onChange={handleChange}
                  required={true}
                  accept="image/png, image/jpg, image/jepg"
                />
                </label>
                
                <label htmlFor="detalles">
                  Detalles:
                  <textarea
                    rows={10}
                    columns={10}
                    type="text"
                    id="detalles"
                    name="detalles"
                    placeholder="Redacte alguna información adicional"
                    value={values.detalles}
                    onChange={handleChange}
                    required={true}
                  />
                </label>
              </section>
              <section>
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </button>
              </section>
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </>
  );
};
