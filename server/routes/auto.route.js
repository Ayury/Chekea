import { Router } from "express";
import { getAllAuto, getAuto, insertAuto, updateAuto, deleteAuto, autosPropietario } from "../controllers/auto.controller.js";

export const routeAuto = Router();

routeAuto.get("/auto", getAllAuto);
routeAuto.get("/auto/:id", getAuto);
routeAuto.post("/auto", insertAuto);
routeAuto.put("/auto/:id", updateAuto);
routeAuto.delete("/auto/:id", deleteAuto);

// Autos de un dueño
routeAuto.get("/auto/propietario/:id", autosPropietario);
routeAuto.get("/auto/img/propietario/:id", getAuto);