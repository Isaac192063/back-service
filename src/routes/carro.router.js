import { Router } from 'express'

import carroController from '../controllers/carro.controller.js'
const carroRouter = Router()


carroRouter.get("/carro", carroController.getAllCar)
carroRouter.get("/carro/:idCarro", carroController.getCarUnique)
carroRouter.post("/carro", carroController.postCar)
carroRouter.delete("/carro/:id", carroController.deleteCar)
carroRouter.put("/carro/:id", carroController.putCar)

export default carroRouter;