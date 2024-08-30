import PgConection from "../services/pgConection.service.js";

const getAllCar = async () => {
    const pg = new PgConection()
    return await pg.connection.query(
        `
        SELECT 
            * 
        FROM 
            CARRO 
        ORDER BY 
            id ASC;
        `
    )
}

const saveCar = async (nombre, anyo, empresa) => {
    try {
        const pg = new PgConection()
        return await pg.connection.query(
        `
        INSERT INTO 
        CARRO( 
            nombre, 
            anyo, 
            empresa
        )VALUES ( $1, $2, $3) 
        RETURNING *; 
        `, 
        [nombre, anyo, empresa]);

    } catch (error) {
        console.log(error);
    }
}

const getCarUnique = async (id) => {
    try {
        const pg = new PgConection()
        return await pg.connection.query(
            `
            SELECT 
                * 
            FROM 
                CARRO 
            WHERE 
                id = $1
            `
            , 
            [id])
    } catch (error) {
        return [];
    }
}

const updateCar = async (id, nombre, anyo, empresa) => {
    try {
        
        const pg = new PgConection()
        return await pg.connection.query(
            `
            UPDATE CARRO 
            SET 
                nombre=$[nom], 
                anyo= $[anio], 
                empresa= $[empr] 
            WHERE 
                id= $[id] 
            RETURNING *;
            `,
            {
                empr: empresa,
                anio: anyo,
                id: id,
                nom: nombre,
            }
        );
    } catch (error) {
        console.log(error);
    }
}
const deleteCar = async (id) => {
    try {
        
        const pg = new PgConection()
        return await pg.connection.query(
            `
            DELETE FROM 
                carro 
            WHERE 
                id = $1 
            RETURNING *
            `
            , 
            [id] 
        );
    } catch (error) {
        console.log(error);
    }
}

export default {
    getAllCar,
    saveCar,
    getCarUnique,
    updateCar,
    deleteCar
}