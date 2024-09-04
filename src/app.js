import express from 'express';
import usersRoute from './routes/users.routes.js';
import reservationsRoute from './routes/reservations.routes.js';
const app = express();
app.use(express.json())
app.use(usersRoute);
app.use(reservationsRoute);
export default app;