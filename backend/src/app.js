import express from 'express';
import tasksRoutes from './routes/tasks';
import cors from 'cors';
import morgan from 'morgan';
import { options } from './swaggerOptions';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';



const specs = swaggerJSDoc(options)
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());//Para que express pueda leer el Json
app.use(tasksRoutes);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

export default app;