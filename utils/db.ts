import { Sequelize } from "sequelize";
import {config} from 'dotenv';

config();

console.warn("Initial DB connection")

const sqlz = new Sequelize({
    dialect: "postgres",
    database: process.env.PG_DB,
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
})

export default sqlz;