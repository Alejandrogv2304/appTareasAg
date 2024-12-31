import express from 'express';
import tasksRoutes from './routes/tasks';

const app = express();

app.use(express.json());//Para que express pueda leer el Json
app.use(tasksRoutes);

export default app;