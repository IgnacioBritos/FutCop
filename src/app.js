import express from 'express';
import route from './routes/users.routes.js';
const app = express();
app.use(express.json())
app.use(route)

export default app;