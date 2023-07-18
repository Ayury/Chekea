import React from "react";
import { Formik, Form } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { registrar } from "../api/login";

export const Registrar = () => {
  const navigate = useNavigate();

  const reg = {
    nombre: "",
    apellido: "",
    email: "",
    contra: "",
    telefono: ""
  };

  return (
    <div>
      <Formik
        initialValues={reg}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          const response = await registrar(values);
          try {
            if(response.insertId > 0){
              navigate("/")
            }

          } catch (error) {
            console.log(error);
          }
          
          actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form action="/" method="get" onSubmit={handleSubmit}>
            <label htmlFor="nombre">
              Nombre:
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Yury"
                value={values.nombre}
                onChange={handleChange}
                required={true}
              />
            </label>
            <label htmlFor="apellido">
              Apellido:
              <input
                type="text"
                id="apellido"
                name="apellido"
                placeholder="Agrazal"
                value={values.apellido}
                onChange={handleChange}
                required={true}
              />
            </label>
            <label htmlFor="email">
              Email:
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@utp.ac.pa"
                value={values.email}
                onChange={handleChange}
                required={true}
              />
            </label>
            <label htmlFor="contra">
              Contraseña:
              <input
                type="password"
                id="contra"
                name="contra"
                placeholder="*******"
                value={values.contra}
                onChange={handleChange}
                required={true}
              />
            </label>
            <label htmlFor="telefono">
              Telefono:
              <input
                type="tel"
                id="telefono"
                name="telefono"
                placeholder="6212-6212"
                value={values.telefono}
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
          {/* Link es igual a la etiqueta "a" en React */}
        <h1>Si ya tiene una cuenta,  <Link to="/" >Inicie Sesión</Link> </h1>
    </div>
  );
};
