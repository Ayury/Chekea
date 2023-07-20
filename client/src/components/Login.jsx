import React from "react";
import { Formik, Form } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { useChekea } from "../context/ChekeaContext";
import loginCeleste from "../../public/loginCeleste.jpg";
import logo from '../assets/logo.png'

export const Login = () => {
  const navigate = useNavigate();
  const { logear } = useChekea();

  const login = {
    email: "",
    contra: "",
  };

  return (
    <main className="mainLogin">
      <div>
        <img src={loginCeleste} />
      </div>
      <div className="formLogin">
        <img src={logo} style={{width: '15%', height: "15%"}}/>
        <h1>Iniciar Sesión</h1>
        <Formik
          initialValues={login}
          enableReinitialize={true}
          onSubmit={async (values, actions) => {
            const response = await logear(values);
            if (response == 1) {
              navigate("/");
            }

            actions.resetForm();
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form action="/" method="get" onSubmit={handleSubmit} className="formularioLogin">
              <label htmlFor="email">
                Email:
              </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@utp.ac.pa"
                  value={values.email}
                  onChange={handleChange}
                  required={true}
                /><br/>
              <label htmlFor="contra">
                Contraseña:
              </label>
                <input
                  type="password"
                  id="contra"
                  name="contra"
                  placeholder="*******"
                  value={values.contra}
                  onChange={handleChange}
                  required={true}
                /><br/>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Iniciando..." : "Iniciar Sesión"}
              </button>
            </Form>
          )}
        </Formik>
        <h3>Si no tiene una cuenta aún, <Link to="/registrar">Regístrese</Link></h3>
      </div>
    </main>
  );
};
