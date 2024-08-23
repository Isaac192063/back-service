import carroModel from '../models/carro.model.js'

export function getAllCar(req, res) {

    const asa = carroModel.getAllCar()

    res.status(200).json({
        sucess: true,
        messae: "Get all car"
    })
}
export function postCar(req, res) {

    const asa = carroModel.saveCar()


    res.status(200).json({
        sucess: true,
        messae: "Get all car"
    })
}

export default {
    getAllCar,
    postCar
}
