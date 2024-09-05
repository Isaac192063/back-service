import carroModel from '../models/carro.model.js'

export async function getAllCar(req, res) {

    const asa = await carroModel.getAllCar()

    res.status(200).json({
        sucess: true,
        data: asa,
    })
}
export  async function postCar(req, res) {

    const {nombre, anyo, empresa} = req.body;

    const data = await carroModel.saveCar(nombre, anyo, empresa);

    res.status(200).json({
        sucess: true,
        data
    })
}
export  async function putCar(req, res) {

    const {id} = req.params;
    const {nombre, anyo, empresa} = req.body;

    const asa = await carroModel.updateCar(id, nombre, anyo, empresa );

    res.status(200).json({
        sucess: true,
        data: asa
    })
}
export  async function deleteCar(req, res) {

    const {id} = req.params;

    const asa = await carroModel.deleteCar(id );

    res.status(200).json({
        sucess: true,
        data: asa
    })
}




export async function getCarUnique(req, res){

    const {idCarro} = req.params
    const data = await carroModel.getCarUnique(idCarro);

    res.status(200).json({
        sucess: true,
         data
    })
}

export default {
    getAllCar,
    postCar,
    getCarUnique, 
    putCar,
    deleteCar
}
