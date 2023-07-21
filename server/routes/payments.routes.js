import { Router } from "express"

import {crearOrden,capturarOrden,cancelarOrden} from '../controllers/payments.controller.js'

export const routerPayment = Router();

routerPayment.post('/crear-orden', crearOrden)
routerPayment.get('/capturar-orden', capturarOrden)
routerPayment.get('/cancelar-orden', cancelarOrden)

