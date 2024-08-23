import express from "express";
import server from '../config/default.js'
import indexRouter from "../routes/index.router.js";
import PgConection from "../services/pgConection.service.js";

export default class Server {
    constructor() {
        this.port = server.port;
        this.app = express()
    }

    initDatabase() {
        new PgConection()
    }

    middlewares() {
    }


    routes() {
        this.app.use(indexRouter)
    }
    runServer() {
        this.initDatabase()
        this.middlewares()
        this.routes()
        this.app.listen(this.port)
    }
}