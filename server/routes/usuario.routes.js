import { Router } from "express";
import { getUsuarios, getUsuario, Login, Registrar } from "../controllers/usuario.controller.js";

export const routeUsuario = Router();

// Declaras las rutas Http que se van a utilizar
routeUsuario.get("/usuario", getUsuarios);
routeUsuario.get("/usuario/:id", getUsuario);
routeUsuario.post("/login", Login);
routeUsuario.post("/registrar", Registrar);