import { Router } from "express";
import { createReservation, getReservation, getOneReservation, updateReservations, deleteReservation } from "../controllers/reservations.controllers.js";
const reservationsRoute = Router()

reservationsRoute.post('/reservations', createReservation)//crean una solicitude de reservación 
reservationsRoute.get("/reservations", getReservation)//trae todas las reservas
reservationsRoute.get("/reservations/:id", getOneReservation)//trae una sola reserva
reservationsRoute.delete("/reservations/:id", deleteReservation)//elimina una reserva
reservationsRoute.put("/reservations/:id", updateReservations)//actualiza o cambia  una reserva 

export default reservationsRoute;