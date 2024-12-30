import {connect} from '../databse';

//Aquí definimos los métodos que se usan en el Routes
export const getTasks = async (req,res) => {
const db = await connect()
const [rows]= await db.query('SELECT * FROM tasks')
console.log(rows)
res.send('Respuesta de Tasks de Alejandro');
}

export const getTask = (req,res) => {
res.send('Respuesta de Tasks de Alejandro');
}

 export const getTaskCount = (req,res) => {
 res.send('Respuesta de Tasks de Alejandro');
}

export const saveTask = (req,res) => {
res.send('Respuesta de Tasks de Alejandro');
}

export const updateTask = (req,res) => {
res.send('Respuesta de Tasks de Alejandro');
}

export const deleteTask = (req,res) => {
    res.send('Respuesta de Tasks de Alejandro');
    }
    

