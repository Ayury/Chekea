import { Router } from "express";
import { getAllAuto, getAuto, insertAuto, autosPropietario, autosPropietarioConCita } from "../controllers/auto.controller.js";

export const routeAuto = Router();

routeAuto.get("/auto", getAllAuto);
routeAuto.get("/auto/:id", getAuto);
routeAuto.post("/auto", insertAuto);

// Autos de un dueño
routeAuto.get("/auto/propietario/:id", autosPropietario);
routeAuto.get("/auto/propietario/cita/:id", autosPropietarioConCita);
routeAuto.get("/auto/img/propietario/:id", getAuto);