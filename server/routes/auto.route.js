import { Router } from "express";
import { getAllAuto, getAuto, insertAuto, updateAuto, deleteAuto } from "../controllers/auto.controller.js";

export const routeAuto = Router();

routeAuto.get("/auto", getAllAuto);
routeAuto.get("/auto:id", getAuto);
routeAuto.post("/auto", insertAuto)
routeAuto.put("/auto:id", updateAuto);
routeAuto.delete("/auto:id", deleteAuto);