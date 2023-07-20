import express from 'express';
import cors from 'cors';
import { routeUsuario } from './routes/usuario.routes.js';
import { routeAuto } from './routes/auto.route.js';
import { routeTaller } from './routes/taller.route.js'

// Iniciarlizar Express y utilizar el Cors
const app = express();
app.use(cors());
app.use(express.json());

// Indicarle que utilice las rutas
app.use(routeUsuario);
app.use(routeAuto);
app.use(routeTaller);

//Levantando el Servidor
app.listen(3001);
console.log("Servidor levantado en el puerto 3001");