import { Reservation } from "../models/Reservations.js"


export const createReservation = async (req, res) => {
    try {
        const { user_id , date, time, number_of_players, location,description,start_date,
            end_date } = req.body
        const newReservation = await Reservation.create({
            start_date,
            end_date,
            date, 
            time,
            number_of_players, 
            location,
            description,
            user_id,

        })
        res.json(newReservation)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}


export const getReservation = async (req, res) => {
    try {
        const allReservation = await Reservation.findAll()
        res.json(allReservation)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}