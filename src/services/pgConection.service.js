import pgPromise from "pg-promise";

import environment from '../config/default.js'

export default class PgConection {

    static instance;

    constructor() {
        if (PgConection.instance) {
            return PgConection.instance;
        }
        PgConection.instance = this;
        const pgp = pgPromise({})
        this.connection = pgp(environment.db_URl)
        this.connection.connect()
            .then(obj => {
                console.log("Me conecte " + obj.client.serverVersion);
                obj.done()
            })
            .catch(e => {
                console.log("error" + e.message || e);
            })
    }
}