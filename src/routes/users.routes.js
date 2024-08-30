import { Router } from "express";
const route = Router();
import { getUsers, createUsers } from "../controllers/users.controllers.js";

route.get('/users', getUsers) //TRAER USUARIOS
route.post('/users' ,createUsers)//añade usuarios
route.put('/users/:id')//actualiza o cambia usuario
route.delete('/users/:id')//elimina un usuario
route.get('/users/:id')//TRAE UN SOLO USUARIO

export default route; 