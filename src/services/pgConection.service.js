import pgPromise from "pg-promise";

export default class PgConection {

    static instance;

    constructor() {
        if (PgConection.instance) {
            return PgConection.instance;
        }
        PgConection.instance = this;
        const pgp = pgPromise({})
        this.connection = pgp("postgres://postgres:admin@localhost:5432/asa")
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