import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import routers from './routers';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routers);

export default app;