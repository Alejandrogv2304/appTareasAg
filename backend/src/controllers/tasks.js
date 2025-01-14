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
const [results] = await connection.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [
    req.body.title,
    req.body.description
])
res.json({
    id: results.insertId,
    ... req.body,
});
}

export const deleteTask = async (req, res) => {
    const connection = await connect();
  const result = await connection.execute("DELETE FROM tasks WHERE id = ?", [
    req.params.id,
  ]);
  console.log(result);

  res.sendStatus(204);
};


export const updateTask = async (req,res) => {
const connection = await connect();
await connection.query("UPDATE tasks SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);
  
  res.sendStatus(204);
};



