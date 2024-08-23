import { Router } from 'express'

import carroController from '../controllers/carro.controller.js'
const carroRouter = Router()


carroRouter.get("/carro", carroController.getAllCar)
carroRouter.post("/carro", carroController.postCar)
carroRouter.delete("/carro")
carroRouter.put("/carro")

export default carroRouter;