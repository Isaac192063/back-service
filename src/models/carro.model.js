import PgConection from "../services/pgConection.service.js";

const getAllCar = async () => {
    const pg = new PgConection()
    return await pg.connection.query("SELECT * FROM CARROS")
}
const getAllModels = async () => {
    const pg = new PgConection()
    return await pg.connection.query("SELECT * FROM MODELS")
}

const saveCar = () => {
    console.log(" new car");
}

export default {
    getAllCar,
    saveCar,
    getAllModels
}