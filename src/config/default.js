import dotenv from 'dotenv'

dotenv.config()


export default   {
    port : process.env.PORT,
    jwt_hash: process.env.JWT_HASH,
    db_URl: process.env.DB_URL
}