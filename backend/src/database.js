import {config}  from "./config";
import mysql from "mysql2/promise";

//Aquí creamos la conexión a la base de datos

export const connect = async () => {
return await mysql.createConnection(config);

};

