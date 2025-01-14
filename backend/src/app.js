import express from 'express';
import tasksRoutes from './routes/tasks';
import cors from 'cors';
import morgan from 'morgan';


const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());//Para que express pueda leer el Json
app.use(tasksRoutes);

export default app;