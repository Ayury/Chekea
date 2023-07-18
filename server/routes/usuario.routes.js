import { Router } from "express";
import { getUsuarios, getUsuario, Login, Registrar } from "../controllers/usuario.controller.js";

export const route = Router();

// Declaras las rutas Http que se van a utilizar
route.get("/usuario", getUsuarios);
route.get("/usuario:id", getUsuario);
route.post("/login", Login);
route.post("/registrar", Registrar);