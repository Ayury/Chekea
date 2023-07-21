import { Router } from "express";
import { agendarCita, getAutosCita, getAutoCita, guardarReporte } from "../controllers/cita.controller.js";

export const routeCita = Router();

routeCita.post("/cita", agendarCita);
routeCita.get("/cita", getAutosCita);
routeCita.get("/cita/:id", getAutoCita);
routeCita.post("/reporte", guardarReporte);