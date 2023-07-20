import { Router } from "express";
import { getAllTaller, getTaller } from "../controllers/taller.controller.js";

export const routeTaller = Router();

routeTaller.get("/talleres", getAllTaller);
routeTaller.get("/taller/:id", getTaller);