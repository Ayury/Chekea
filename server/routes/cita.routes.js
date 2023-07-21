import { Router } from "express";
import { agendarCita } from "../controllers/cita.controller.js";

export const routeCita = Router();

routeCita.post("/cita", agendarCita);