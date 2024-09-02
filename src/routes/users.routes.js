import { Router } from "express";
const usersRoute = Router();
import { getUsers, createUsers, updateUsers, deleteUser, getUser } from "../controllers/users.controllers.js";

usersRoute.post('/users' ,createUsers)//añade usuarios
usersRoute.get('/users', getUsers) //TRAER USUARIOS
usersRoute.get('/users/:id',getUser)//TRAE UN SOLO USUARIO
usersRoute.put('/users/:id', updateUsers)//actualiza o cambia usuario
usersRoute.delete('/users/:id',deleteUser)//elimina un usuario

export default usersRoute; 