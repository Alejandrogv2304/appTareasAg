import {config}  from "./config";
import mysql from "mysql2/promise";

const connect = async () => {
const conn = await mysql.createConnection(config);
const result = await conn.query('SELECT * FROM tasks ');
console.log(result);
};

connect();