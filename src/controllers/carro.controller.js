import carroModel from '../models/carro.model.js'

export async function getAllCar(req, res) {

    const asa = await carroModel.getAllCar()
    const modelos = await carroModel.getAllModels()

    res.status(200).json({
        sucess: true,
        messae: "Get all car",
        data: asa,
        modelos
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
