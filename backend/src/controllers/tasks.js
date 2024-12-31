import {connect} from '../database';

//Aquí definimos los métodos que se usan en el Routes
export const getTasks = async (req,res) => {
const connection = await connect()
const [rows]= await connection.query('SELECT * FROM tasks')
console.log(rows)
res.json(rows)
}

export const getTask = async (req,res) => {
const connection = await connect()
const [rows] = await connection.query('SELECT * FROM tasks WHERE id = ?',
    [
    req.params.id
    ]);
res.json(rows[0])
}

 export const getTaskCount = async (req,res) => {
 const connection = await connect()
 const [rows] = await connection.query('SELECT count(*) FROM tasks');

 res.json(rows[0]["count(*)"])
}

export const saveTask = async (req,res) => {
const connection = await connect()
const result = await connection.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [
    req.body.title,
    req.body.description
])
console.log(result)
}

export const updateTask = async (req,res) => {
res.send('Respuesta de Tasks de Alejandro');
}

export const deleteTask = async (req,res) => {
    res.send('Respuesta de Tasks de Alejandro');
    }
    

