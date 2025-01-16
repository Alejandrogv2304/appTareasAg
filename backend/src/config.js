import {config as dotenv} from 'dotenv';
dotenv();



export const config ={
    host:process.env.DB_HOST || "localhost",
    user :process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database : process.env.DB_DATABASE || "test"
}

//Las credenciales para la conexión a la base de datos