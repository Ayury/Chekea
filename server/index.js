import express from 'express';
import cors from 'cors';
import { route } from './routes/usuario.routes.js';
import { routeAuto } from './routes/auto.route.js';

// Iniciarlizar Express y utilizar el Cors
const app = express();
app.use(cors());
app.use(express.json());

// Indicarle que utilice las rutas
app.use(route);
app.use(routeAuto);


//Levantando el Servidor
app.listen(3001);
console.log("Servidor levantado en el puerto 3001");