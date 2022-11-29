import { Sequelize } from "sequelize";

const db = new Sequelize("bclxjk3fp8criu0yq32a", "utv9sxqxwlf33p8l", "CYUpcRG2vCgz8glR7zpY", {
    host: "bclxjk3fp8criu0yq32a-mysql.services.clever-cloud.com",
    dialect: "mysql"
})

export default db;