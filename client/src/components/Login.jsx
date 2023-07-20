import React from "react";
import { Formik, Form } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { useChekea } from '../context/ChekeaContext';

export const Login = () => {
  const navigate = useNavigate();
  const { logear } = useChekea();

  const login = {
    email: "",
    contra: ""
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <Formik
        initialValues={login}
        enableReinitialize={true}

        onSubmit={async (values, actions) => {
          const response = await logear(values);
          if(response == 1){
            navigate("/")
          }
          
          actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form action="/" method="get" onSubmit={handleSubmit}>
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
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </Form>
        )}
      </Formik>
          {/* Link es igual a la etiqueta "a" en React */}
        <h1>Si no tiene una cuenta aún,  <Link to="/registrar" >Regístrese</Link> </h1>
    </div>
  );
};
